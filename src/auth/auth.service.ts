import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}

  async validateUser(email: string, password: string): Promise<any> {
    return null;
  }
}
