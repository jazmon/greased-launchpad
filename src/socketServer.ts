import * as socketio from 'socket.io';
import * as Joi from 'joi';
import * as http from 'http';
import logger from '~/logger';
import { default as knex } from '~/db';
import { validateRequest } from '~/utils/validator';
import { User } from '~/modules/users';
import { schema as userSchema } from '~/modules/users/endpoint';
import { HttpError, Maybe } from '~/types';

const DEFAULT_ROOM = 'general';
const printJson = (json: string) => JSON.stringify(json, null, 2);

type SocketEvent =
  | 'connection'
  | 'disconnect'
  | 'new_message'
  | 'message_emitted'
  | 'error';

const doesUserExist = async (userId: Maybe<string>): Promise<boolean> => {
  if (userId === null) return false;
  return (
    (await knex('users').select('user_id').where('user_id', userId).count()) > 0
  );
};

const onNewUserConnect = (
  socket: SocketIO.Socket,
  io: SocketIO.Server,
) => async (user: User) => {
  try {
    validateRequest(user, userSchema);
    if (user === null) throw (new HttpError('Not authorized').status = 403);
    const userAlreadyExists: boolean = await doesUserExist(user.user_id);
    if (!userAlreadyExists) {
      knex('users').insert({
        user_id: user.user_id,
        email: user.email,
        name: user.name,
        nickname: user.nickname,
        picture: user.picture,
      });
    }
    socket.join(DEFAULT_ROOM);
    io.in(DEFAULT_ROOM).emit('user joined', { name: user.name });
  } catch (error) {
    socket.emit('error', error);
  }
};

const onUserDisconnect = () => {
  logger.info('user disconnected');
};

const onNewMessage = (socket: SocketIO.Socket, io: SocketIO.Server) => async (
  data: any,
) => {
  try {
    logger.debug('new message', data);
    const schema = {
      content: Joi.string().required(),
      userId: Joi.string().required(),
    };
    validateRequest(data, schema);
    const messages = await knex
      .table('messages')
      .insert({
        content: data.content,
        user_id: data.userId,
      })
      .returning('*');
    const message = messages[0];
    logger.debug('message', message);

    const user = await knex
      .table('users')
      .where('user_id', message.user_id)
      .select('*');
    const msgWithUser = Object.assign({}, message, { user: user[0] });
    logger.debug('msgWithUser', printJson(msgWithUser));
    io.in(DEFAULT_ROOM).emit('message_emitted', msgWithUser);
  } catch (error) {
    socket.emit('error', error);
  }
};

const createSocketServer = (server: http.Server) => {
  const io = socketio(server);
  io.on('connection', socket => {
    const defaultRoom = 'general';
    socket.on('connection', onNewUserConnect(socket, io));
    socket.on('disconnect', onUserDisconnect);
    socket.on('new_message', onNewMessage(socket, io));
  });
};

export default createSocketServer;
