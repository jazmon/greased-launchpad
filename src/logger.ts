import * as winston from 'winston';

const transports: winston.TransportInstance[] = [
  new winston.transports.Console(),
];

if (!!process.env.LOG_FILE) {
  transports.push(
    new winston.transports.File({ filename: <string>process.env.LOG_FILE }),
  );
}
const logger = new winston.Logger({
  transports,
  level: process.env.LOG_LEVEL || 'silly',
});

export default logger;
