import { Injectable } from '@nestjs/common';


@Injectable()
export class AuthService {
  async validateUser(token: string): Promise<any> {
    return await Promise.resolve('Hello world');
  }
}
