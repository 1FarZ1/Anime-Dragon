import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class EpisodesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getEpisodes(animeId: number) {
    return this.prismaService.episode.findMany({
      where: {
        animeId,
      },
    });
  }

  async getEpisode(episodeId: number) {
    const episode = await this.prismaService.episode.findUnique({
      where: {
        id: episodeId,
      },
    });
    if (!episode) {
      throw new BadRequestException('Episode not found');
    }
    return episode;
  }

  async getEpisodePath(episodeId: number) {
    const episode = await this.getEpisode(episodeId);

    if (!episode) {
      throw new BadRequestException('Episode not found');
    }
    try {
      const filePath = episode.videoPath;
      return filePath;
    } catch (error) {
      console.error('Error streaming episode:', error);
      throw new InternalServerErrorException('Internal server error');
    }
  }

  //   async addEpisode(data: { animeId: number; name: string; videoUrl: string }) {
  //     return this.prismaService.episode.create({
  //       data,
  //     });
  //   }
}
