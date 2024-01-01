import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEnity } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(payload: UserEnity) {
    return this.jwtService.sign(payload);
  }
}
