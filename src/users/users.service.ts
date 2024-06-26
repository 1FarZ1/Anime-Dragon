import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';

export type User = {
  id: number;
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto, avatar: string) {
    const newUser = await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: createUserDto.password,
        avatar: avatar,
        name: createUserDto.name,
      },
    });

    return newUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async findOneById(id: number) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id,
        },
      });

      // remove password
      delete user.password;

      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
