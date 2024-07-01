import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class FavoriteService {
  constructor(private readonly prismaService: PrismaService) {}
  async addToFavorites(userId: number, animeId: number) {
    const anime = await this.prismaService.anime.findUnique({
      where: { id: animeId },
    });
    if (!anime) {
      throw new NotFoundException('Anime not found');
    }
    const favorite = await this.prismaService.favorite.findFirst({
      where: { userId, animeId },
    });
    if (favorite) {
      throw new NotFoundException('Favorite already exists');
    }
    const res = await this.prismaService.favorite.create({
      data: { userId, animeId },
      include: {
        anime: {
          include: {
            studio: true,
            characters: true,
          },
        },
      },
    });

    if (res) {
      return {
        message: 'Favorite added successfully',
        status: 200,
      };
    }
  }

  async removeFromFavorites(userId: number, animeId: number) {
    const favorite = await this.prismaService.favorite.findFirst({
      where: { userId, animeId },
    });
    if (!favorite) {
      throw new NotFoundException('Favorite not found');
    }
    const res = await this.prismaService.favorite.delete({
      where: {
        userId_animeId: {
          userId,
          animeId,
        },
      },
    });
    if (res) {
      return {
        message: 'Favorite removed successfully',
        status: 200,
      };
    }
  }

  // async getUserFavorites(userId: number) {
  //   const result = await this.prismaService.favorite.findMany({
  //     where: { userId },
  //     include: {
  //       // studio of anime
  //       anime: {
  //         include: {
  //           studio: true,
  //           characters: true,
  //         },
  //       },
  //     },
  //   });
  //   // get the last episode and map it to the anime
  //   return await this.animeService.fillAnimesWithIds(
  //     result.map((item) => item.anime.id),
  //   );
  // }

  async isAnimeFavorite(userId: number, animeId: number): Promise<boolean> {
    const favorite = await this.prismaService.favorite.findFirst({
      where: { userId, animeId },
    });
    return favorite ? true : false;
  }
}
