import { Injectable } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { Order, OrderBy } from 'src/common/dto/filter.dto';
import { Anime } from '@prisma/client';
import { ReviewsService } from 'src/reviews/reviews.service';
// import { Prisma } from '@prisma/client';

@Injectable()
export class AnimeService {
  constructor(
    private prisma: PrismaService,
    private readonly reviewsService: ReviewsService,
  ) {}

  async getAnimes() {
    const animes = await this.prisma.anime.findMany({
      include: {
        studio: true,
        characters: true,
      },
    });
    //TODO: Implement the logic to get the last episode of each anime , with better performance , cause this is not the best way to do it
    const completedAnimes = await Promise.all(
      animes.map(async (anime) => {
        const lastEpisode = await this.getLastEpisode(anime.id);
        const { averageRating, numberOfReviews } =
          await this.reviewsService.getAnimeRating(anime.id);
        return {
          ...anime,
          lastEpisode: lastEpisode ? lastEpisode.number : 0,
          rating: averageRating,
          numberOfReviews,
        };
      }),
    );

    return {
      ...completedAnimes,
    };
  }
  async getLastEpisode(animeId: number) {
    return this.prisma.episode.findFirst({
      where: {
        animeId,
      },
      orderBy: {
        number: 'desc',
      },
    });
  }

  async getPopularAnimes() {
    return this.prisma.anime.findMany({
      orderBy: {
        rating: 'desc',
      },
    });
  }

  async getAnimesSearch(
    query: string,
    // userWhereUniqueInput: Prisma.AnimeWhereUniqueInput,
    orderBy: OrderBy,
    order: Order,
  ) {
    const results: Anime[] = await this.prisma.anime.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
            },
          },
          {
            description: {
              contains: query,
            },
          },
        ],
      },
      orderBy: {
        [orderBy]: order,
      },
    });

    // TODO: get the last episode of each anime
    const animesWithLastEpisode = await Promise.all(
      results.map(async (anime) => {
        const lastEpisode = await this.getLastEpisode(anime.id);
        return {
          ...anime,
          lastEpisode: lastEpisode ? lastEpisode.number : 0,
        };
      }),
    );

    return animesWithLastEpisode;
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
