import { sign, verify } from 'jsonwebtoken';
import { Role } from './enums';

export type jwtPayload = {
  id: number;
  email: string;
  role: Role;
};

export class JwtManager {
  private static secret = 'secret' || process.env.JWT_SECRET;
  private static expiration = '10000s' || process.env.JWT_EXPIRE_TIME;

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
