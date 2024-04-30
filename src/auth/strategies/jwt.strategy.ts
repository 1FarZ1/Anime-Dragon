import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';
import { JwtManager, jwtPayload } from 'src/utils/jwt.util';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,

      secretOrKey: JwtManager.getSecret,
      expiration: JwtManager.getExpiration,
    });
  }

  async validate(payload: jwtPayload) {
    console.log('payload', payload);
    const user = await this.userService.findOneById(payload.id);
    if (!user) throw new UnauthorizedException('no user found with this token');

    return { id: payload.id, email: payload.email, role: payload.role };
  }
}
