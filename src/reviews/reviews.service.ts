import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { AddRatingDto } from './dto/add_rating.dto';

@Injectable()
export class ReviewsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAnimeReviews(animeId: number) {
    const reviews = await this.prismaService.review.findMany({
      where: { animeId },
    });
    return reviews;
  }

  async addRating(userId: number, addRatingDto: AddRatingDto) {
    const { animeId, rating } = addRatingDto;
    const review = await this.prismaService.review.findFirst({
      where: { userId, animeId },
    });
    if (review) {
      await this.prismaService.review.update({
        where: { id: review.id },
        data: { rating },
      });
      return {
        message: 'Rating updated successfully',
        status: 200,
      };
    }
    await this.prismaService.review.create({
      data: { userId, animeId, rating },
    });
    return {
      message: 'Rating added successfully',
      status: 200,
    };
  }
}
