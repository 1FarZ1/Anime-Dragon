import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class CollectionService {
  constructor(private readonly prismaService: PrismaService) {}

  async getCollection(userId: number) {
    const result = await this.prismaService.userAnimeList.findMany({
      where: { userId },
    });
    return result;
  }

  async addToCollection(userId: number, animeId: number) {
    const anime = await this.prismaService.anime.findUnique({
      where: { id: animeId },
    });
    if (!anime) {
      throw new NotFoundException('Anime not found');
    }
    const collection = await this.prismaService.userAnimeList.findFirst({
      where: { userId, animeId },
    });
    if (collection) {
      throw new NotFoundException('Anime already in collection');
    }
    const res = await this.prismaService.userAnimeList.create({
      data: { userId, animeId },
    });
    if (res) {
      return {
        message: 'Anime added to collection successfully',
        status: 200,
      };
    }
  }

  async removeFromCollection(userId: number, animeId: number) {
    const collection = await this.prismaService.userAnimeList.findFirst({
      where: { userId, animeId },
    });
    if (!collection) {
      throw new NotFoundException('Anime not found in collection');
    }
    const res = await this.prismaService.userAnimeList.delete({
      where: {
        userId_animeId: {
          userId,
          animeId,
        },
      },
    });
    if (res) {
      return {
        message: 'Anime removed from collection successfully',
        status: 200,
      };
    }
  }

  async isAnimeInCollection(userId: number, animeId: number) {
    const collection = await this.prismaService.userAnimeList.findFirst({
      where: { userId, animeId },
    });
    if (collection) {
      return true;
    }
    return false;
  }
}
