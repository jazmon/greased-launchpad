import * as express from 'express';
import { Router } from 'express-serve-static-core';

import * as location from 'modules/location/endpoint';
import * as messages from './endpoints/messages';
import * as users from './endpoints/users';
import * as posts from './endpoints/posts';

const router = express.Router();

router.get('/locations', location.getLocations);

router.get('/messages', messages.getMessages);
router.post('/messages', messages.submitMessage);

router.get('/users', users.getUsers);
router.post('/users', users.createUser);

router.get('/posts', posts.getPosts);

export default router;
