import { Module } from '@nestjs/common';
import { CustomConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [ConfigService],
  exports: [CustomConfigService],
})
export class CustomConfigModule {}
