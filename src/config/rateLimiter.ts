import rateLimiter from 'express-rate-limit';
import { errors } from '../utils/service/error';

const limiter = rateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again in an hour!',
  statusCode: 429,
  handler: (req, res) => {
    errors(
      res,
      429,
      'Too many requests from this IP, please try again in an hour!'
    );
  }
});

export default limiter;
