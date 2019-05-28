import { Injectable } from '@nestjs/common';
import * as OktaJwtVerifier from '@okta/jwt-verifier';

import { ConfigService } from '../config/config.service';

@Injectable()
export class AuthService {
  private oktaVerifier: any;

  constructor(private readonly config: ConfigService) {
    this.oktaVerifier = new OktaJwtVerifier({
      issuer: config.get('ISSUER'),
      clientId: config.get('CLIENT_ID'),
    });
  }

  async validateToken(token: string): Promise<any> {
    const jwt = await this.oktaVerifier.verifyAccessToken(token);
    return jwt;
  }
}
