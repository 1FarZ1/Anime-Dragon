import { IsOptional, IsEnum, IsString } from 'class-validator';

export enum OrderBy {
  Name = 'name',
  Rating = 'rating',
  ReleaseDate = 'releaseDate',
}

export class AnimeFilterDto {
  @IsOptional()
  @IsString({ message: 'Search must be a string' })
  search?: string;

  @IsOptional()
  @IsEnum(OrderBy)
  orderBy?: OrderBy;

  @IsOptional()
  @IsString({ message: 'Order must be a string' })
  order?: 'asc' | 'desc';
}
