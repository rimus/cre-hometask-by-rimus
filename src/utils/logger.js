import winston from 'winston';

export const log = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
    }),
    new winston.transports.File({
      level: 'debug',
      format: winston.format.simple(),
      filename: `logs/${new Date().toISOString().replace(/:/g, '-')}.log`,
    }),
  ],
});
