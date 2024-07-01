import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { AddReviewDto } from './dto/add_rating.dto';

export interface Vote {
  rating: number;
  votes: number;
}
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

  async isReviewed(userId: number, animeId: number) {
    const review = await this.prismaService.review.findFirst({
      where: { userId, animeId },
    });
    return review ? true : false;
  }

  async getVotes(animeId: number) {
    const votes: Vote[] = Array.from({ length: 10 }, (_, index) => ({
      rating: index + 1,
      votes: 0,
    }));

    const reviews = await this.prismaService.review.findMany({
      where: { animeId },
    });

    reviews.forEach((review) => {
      votes[review.rating - 1].votes += 1;
    });

    return votes;
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
        votes: await this.getVotes(animeId),
        rating: await this.getAnimeRating(animeId),
      };
    }
    await this.prismaService.review.create({
      data: { userId, animeId, rating },
    });
    return {
      votes: await this.getVotes(animeId),
      rating: await this.getAnimeRating(animeId),
    };
  }
}
