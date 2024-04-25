import { Module } from '@nestjs/common';
import { AnimeController } from './anime.controller';
import { EpisodesController } from './episodes.controller';
import { AnimeService } from './animes.service';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  imports: [],
  controllers: [AnimeController, EpisodesController],
  providers: [
    AnimeService,
    PrismaService,
    // EpisodesService,
  ],
})
export class AnimeModule {}
