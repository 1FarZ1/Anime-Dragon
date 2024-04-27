import { Injectable } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';

@Injectable()
export class AnimeService {
  constructor(private prisma: PrismaService) {}

  async getAnimes() {
    const animes = await this.prisma.anime.findMany();
    //TODO: Implement the logic to get the last episode of each anime , with better performance , cause this is not the best way to do it
    const animesWithLastEpisode = await Promise.all(
      animes.map(async (anime) => {
        const lastEpisode = await this.prisma.episode.findFirst({
          where: {
            animeId: anime.id,
          },
          orderBy: {
            number: 'desc',
          },
        });

        console.log(lastEpisode);

        return {
          ...anime,
          lastEpisode: lastEpisode ? lastEpisode.number : 0,
        };
      }),
    );

    return animesWithLastEpisode;
  }

  async getPopularAnimes() {
    return this.prisma.anime.findMany({
      orderBy: {
        rating: 'desc',
      },
    });
  }

  async getAnime(id: number) {
    return this.prisma.anime.findUnique({
      where: {
        id,
      },
    });
  }

  //   async addAnime(data: { name: string; episodes: number }) {
  //     return this.prisma.anime.create({
  //       data,
  //     });
  //   }
}
