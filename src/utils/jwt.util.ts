import { sign, verify } from 'jsonwebtoken';
import { RoleType } from '@prisma/client';

export type jwtPayload = {
  id: number;
  email: string;
  role: RoleType;
};

export class JwtManager {
  private static secret = 'secret' || process.env.JWT_SECRET;
  private static expiration = '60d' || process.env.JWT_EXPIRE_TIME;

  static sign(payload: jwtPayload): string {
    return sign(payload, this.secret, { expiresIn: this.expiration });
  }

  static verify(token: string): jwtPayload {
    return verify(token, this.secret) as jwtPayload;
  }
  static get getSecret() {
    return this.secret;
  }

  static get getExpiration() {
    return this.expiration;
  }
}
