import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'secret',
      expiration: process.env.JWT_EXPIRE_TIME || '10000s',
    });
  }

  async validate(payload: any) {
    console.log('payload', payload);
    const user = await this.userService.findOneById(payload.sub);
    if (!user) throw new UnauthorizedException('no user found with this token');

    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}
