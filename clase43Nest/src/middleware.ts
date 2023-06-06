import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export default class MiddlewareLog implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('primer middleware nest');
    next();
  }
}
