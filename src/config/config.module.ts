import { Module } from '@nestjs/common';
import { CustomConfigService } from './config.service';

@Module({
  controllers: [],
  providers: [CustomConfigService],
})
export class CustomConfigModule {}
