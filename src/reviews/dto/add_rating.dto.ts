import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class AddReviewDto {
  @IsNumber()
  @IsNotEmpty()
  animeId: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(10)
  rating: number;
}
