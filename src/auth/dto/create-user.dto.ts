import { Optional } from '@nestjs/common';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'username should not be empty' })
  @IsString({ message: 'username must be a string' })
  username: string;

  @IsNotEmpty({ message: 'Email should not be empty' })
  @IsEmail(
    {},
    {
      message: 'Email is invalid',
    },
  )
  email: string;

  @IsNotEmpty({ message: 'Password should not be empty' })
  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @MaxLength(20, {
    message: 'Password must be at most 20 characters long',
  })
  password: string;
}

export class CreateGoogleUser {
  @IsNotEmpty({ message: 'username should not be empty' })
  @IsString({ message: 'username must be a string' })
  username: string;

  @IsNotEmpty({ message: 'Email should not be empty' })
  @IsEmail(
    {},
    {
      message: 'Email is invalid',
    },
  )
  email: string;

  @IsNotEmpty({ message: 'googleId should not be empty' })
  googleId: string;

  //image
  @Optional()
  @IsString({ message: 'image must be a string' })
  image?: string;
}

export class CreateFacebookUser {
  @IsNotEmpty({ message: 'username should not be empty' })
  @IsString({ message: 'username must be a string' })
  username: string;

  @IsNotEmpty({ message: 'Email should not be empty' })
  @IsEmail(
    {},
    {
      message: 'Email is invalid',
    },
  )
  email: string;

  @IsNotEmpty({ message: 'facebookId should not be empty' })
  fbToken: string;

  //image
  @Optional()
  @IsString({ message: 'image must be a string' })
  image?: string;
}
