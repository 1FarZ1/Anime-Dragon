import { Module } from '@nestjs/common';
import { AnimeController } from './anime.controller';
import { EpisodesController } from './episodes.controller';
import { AnimeService } from './animes.service';
import { PrismaService } from 'src/db/prisma.service';
import { EpisodesService } from './episodes.service';

@Module({
  imports: [],
  controllers: [AnimeController, EpisodesController],
  providers: [AnimeService, PrismaService, EpisodesService],
  exports: [AnimeService],
})
export class AnimeModule {}
