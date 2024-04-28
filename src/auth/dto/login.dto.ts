/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Email should not be empty' })
  @IsEmail(
    {},
    {
      message: 'Email is invalid',
    },
  )
  email: string;

  @IsNotEmpty({ message: 'Password should not be empty' })
  password: string;
}
