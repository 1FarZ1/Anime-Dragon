import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CustomConfigService {
  constructor(private readonly configService: ConfigService) {}

  getDbUrl(): string {
    return this.configService.get<string>('DATABASE_URL');
  }
}
