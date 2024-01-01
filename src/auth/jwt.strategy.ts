import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Constants } from 'src/Constants';
import { UserEnity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { Request } from 'express';

@Injectable()
export class PassportJWTStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreException: false,
      secretOrKey: Constants.jwtSecret,
    });
  }
  async validate(payload: any) {
    const isUserExists = this.userService.getAdminUserByName(payload.username);
    return Boolean(isUserExists);
  }
}
