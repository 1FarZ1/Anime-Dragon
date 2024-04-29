import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { HashingHelper } from '../utils/hash';
import { PrismaService } from 'src/db/prisma.service';
import { JwtManager, jwtPayload } from 'src/utils/jwt.util';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private prismaService: PrismaService,
  ) {}

  async validateUser(email: string, passwordI: string) {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    if (!(await HashingHelper.comparePassword(passwordI, user.password))) {
      throw new BadRequestException('Invalid credentials');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;
    return result;
  }

  async login(payload: jwtPayload): Promise<Result> {
    return {
      message: 'Login successful',
      access_token: JwtManager.sign(payload),
    };
  }

  async register(createUserDto: CreateUserDto): Promise<Result> {
    const user = await this.userService.findOneByEmail(createUserDto.email);
    if (user) {
      throw new BadRequestException('User already exists');
    }
    createUserDto.password = await HashingHelper.hashPassword(
      createUserDto.password,
    );
    const newUser = await this.userService.create(createUserDto);
    const payload: jwtPayload = (({ id, email, role }) => ({
      id,
      email,
      role,
    }))(newUser);

    return {
      message: 'User created successfully',
      access_token: JwtManager.sign(payload),
    };
  }
}

type Result = {
  message: string;
  access_token: string;
};

// interface User {
//   id: number;
//   email: string;
//   password: string;
//   avatar: string;
//   role: string;
// }
