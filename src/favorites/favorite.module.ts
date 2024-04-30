import { Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import { PrismaService } from 'src/db/prisma.service';
import { AnimeModule } from 'src/animes/anime.module';
import { AnimeService } from 'src/animes/animes.service';

@Module({
  imports: [AnimeModule],
  controllers: [FavoriteController],
  providers: [FavoriteService, PrismaService, AnimeService],
})
export class FavoriteModule {}
