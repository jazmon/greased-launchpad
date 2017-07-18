import logger from '~/logger';
import { Request, Response } from 'express';
import { HttpError } from '~/types';

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: Function,
) => {
  logger.error(err.message, err.stack);
  let status: number = 500;
  if (err instanceof HttpError) {
    status = err.status;
  }
  res
    .status(status)
    .json({
      error: true,
      success: false,
      message: err.message || 'Something went wrong',
    });
};

export default errorHandler;
