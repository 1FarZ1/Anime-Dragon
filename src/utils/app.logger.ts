// create a custom httpLogger

import { Logger } from '@nestjs/common';
import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class CustomLogger implements NestMiddleware {
  private logger = new Logger('ViralBetLogger');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    res.on('finish', () => {
      this.logger.log(`Request Coming ${method} ${originalUrl}`);
    });

    next();
  }
}
