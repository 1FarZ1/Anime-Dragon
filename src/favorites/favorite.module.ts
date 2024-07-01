import { Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  imports: [],
  controllers: [FavoriteController],
  providers: [FavoriteService, PrismaService],
  exports: [FavoriteService],
})
export class FavoriteModule {}
