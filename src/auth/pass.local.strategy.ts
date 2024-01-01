import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserEnity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super();
  }
  validate(username: string, password: string): UserEnity {
    const currUser: UserEnity = this.userService.getAdminUserByName(username);
    if (!currUser || currUser.password !== password)
      throw new UnauthorizedException();
    return currUser;
  }
}
