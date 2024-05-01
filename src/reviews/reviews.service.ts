import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { AddReviewDto } from './dto/add_rating.dto';

@Injectable()
export class ReviewsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAnimeReviews(animeId: number) {
    const reviews = await this.prismaService.review.findMany({
      where: { animeId },
    });
    return reviews;
  }

  // get anime number of reviews , and average rating
  async getAnimeRating(animeId: number) {
    const reviews = await this.prismaService.review.findMany({
      where: { animeId },
    });
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    if (totalRating === 0) return { numberOfReviews: 0, averageRating: 0 };
    const averageRating = parseFloat((totalRating / reviews.length).toFixed(2));
    return {
      numberOfReviews: reviews.length,
      averageRating,
    };
  }

  async addRating(userId: number, addRatingDto: AddReviewDto) {
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
