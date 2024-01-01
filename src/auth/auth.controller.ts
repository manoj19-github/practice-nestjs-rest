import {
  Body,
  Controller,
  Post,
  ValidationPipe,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from './../user/user.service';
import { LoginBodyDto } from './auth.dto';
import { AuthGuard } from '@nestjs/passport';
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}
  @Post('/login')
  
  login(@Body(new ValidationPipe()) body: LoginBodyDto) {
    const userExists = this.userService.adminUsers.find(
      (self) => self.email === body.email,
    );
    if (!userExists || userExists.password !== body.password)
      throw new UnauthorizedException();

    const token = this.authService.generateToken(body);
    return { token, message: 'SuccessFully login completed' };
  }
}
