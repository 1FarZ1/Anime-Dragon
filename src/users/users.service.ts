import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/db/prisma.service';

type User = {
  id: number;
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  findAll() {
    return `This action returns all users`;
  }

  async findOneByEmail(email: string) {
    // return this.prisma.user.findUnique({
    //   where: {
    //     email,
    //   },
    // });
    const tempUser: User = {
      id: 1,
      email: 'dasdas',
      password: 'dasdasd',
    };
    return tempUser;
  }

  async findOneById(id: number) {
    // return this.prisma.user.findUnique({
    //   where: {
    //     id,
    //   },
    // });
    return {};
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
