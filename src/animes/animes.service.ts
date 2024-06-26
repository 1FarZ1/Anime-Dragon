import { Injectable } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { AnimeFilterDto, Order, OrderBy } from 'src/common/dto/filter.dto';
// import { Anime } from '@prisma/client';
import { ReviewsService } from 'src/reviews/reviews.service';
import { FavoriteService } from 'src/favorites/favorite.service';
import { CollectionService } from 'src/collection/collection.service';
// import { Prisma } from '@prisma/client';

// export interface Anime {
//   id: number;
//   title: string;
//   studio: any;
//   characters: any;
//   tags: any[];
// }

// export interface CompletedAnime extends Anime {
//   lastEpisode: number;
//   rating: number;
//   numberOfReviews: number;
// }

@Injectable()
export class AnimeService {
  constructor(
    private prisma: PrismaService,
    private readonly reviewsService: ReviewsService,
    private readonly favoriteService: FavoriteService,
    private readonly collectionService: CollectionService,
  ) {}
  private async fetchAnimes(
    animeFilterDto: AnimeFilterDto = {
      orderBy: OrderBy.Rating,
      order: Order.DESC,
    },
  ) {
    const { query, orderBy, order } = animeFilterDto;
    const whereCondition =
      query && query.length > 0
        ? {
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
          }
        : {};

    return this.prisma.anime.findMany({
      where: whereCondition,
      include: {
        studio: true,
        characters: true,
        tags: {
          select: {
            tag: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
        episodes: {
          select: {
            number: true,
          },
          orderBy: {
            number: 'desc',
          },
          take: 1, // Get only the last episode
        },
      },
      orderBy: {
        [orderBy]: order,
      },
    });
  }
  private async fetchReviewData(animeIds) {
    const reviewData = await this.prisma.review.groupBy({
      by: ['animeId'],
      where: {
        animeId: {
          in: animeIds,
        },
      },
      _avg: {
        rating: true,
      },
      _count: {
        id: true,
      },
    });

    return reviewData.reduce((acc, review) => {
      acc[review.animeId] = {
        averageRating: review._avg.rating,
        numberOfReviews: review._count.id,
      };
      return acc;
    }, {});
  }

  private combineAnimeWithReviewData(animes, reviewMap) {
    return animes.map((anime) => ({
      ...anime,
      lastEpisode: anime.episodes.length > 0 ? anime.episodes[0].number : 0,
      rating: reviewMap[anime.id]?.averageRating ?? 0,
      numberOfReviews: reviewMap[anime.id]?.numberOfReviews ?? 0,
    }));
  }

  // private add user specific data to anime like isfavorite and isInMyLsit
  private async addUserData(animesId, useriD) {
    return await Promise.all(
      animesId.map(async (anime) => {
        const isFavorite: boolean = await this.favoriteService.isAnimeFavorite(
          useriD,
          anime.id,
        );
        const isInMyList: boolean =
          await this.collectionService.isAnimeInCollection(useriD, anime.id);

        return {
          ...anime,
          isFavorite,
          isInMyList,
        };
      }),
    );
  }

  private async addStats(animesId) {
    return await Promise.all(
      animesId.map(async (anime) => {
        const votes = await this.reviewsService.getVotes(anime.id);
        return {
          ...anime,
          votes,
        };
      }),
    );
  }

  private async addIsReviewed(animesId, userId) {
    return await Promise.all(
      animesId.map(async (anime) => {
        const isReviewed = await this.reviewsService.isReviewed(
          userId,
          anime.id,
        );
        return {
          ...anime,
          isReviewed,
        };
      }),
    );
  }

  async getAnimes(user) {
    const animes = await this.fetchAnimes();
    const animeIds = animes.map((anime) => anime.id);
    const reviewMap = await this.fetchReviewData(animeIds);
    const combinedanimes = this.combineAnimeWithReviewData(animes, reviewMap);
    const finalAnimes = await this.addStats(combinedanimes);

    if (user) {
      const updatedAnimesWithisReviewed = await this.addIsReviewed(
        finalAnimes,
        user.id,
      );
      return this.addUserData(updatedAnimesWithisReviewed, user.id);
    }
    return finalAnimes;
  }

  async searchAnimes(user, animeFilterDto: AnimeFilterDto) {
    const animes = await this.fetchAnimes(animeFilterDto);
    const animeIds = animes.map((anime) => anime.id);
    const reviewMap = await this.fetchReviewData(animeIds);
    const combinedanimes = this.combineAnimeWithReviewData(animes, reviewMap);
    const finalAnimes = await this.addStats(combinedanimes);
    if (user) {
      const updatedAnimesWithisReviewed = await this.addIsReviewed(
        finalAnimes,
        user.id,
      );
      return this.addUserData(updatedAnimesWithisReviewed, user.id);
    }

    return finalAnimes;
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
}
