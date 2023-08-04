import winston from 'winston';

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.simple()
    }),
    new winston.transports.File({
      level: 'error',
      filename: 'app-%DATE%.log',
      dirname: 'log',
      handleRejections: true,
      handleExceptions: true
    })
  ]
});
