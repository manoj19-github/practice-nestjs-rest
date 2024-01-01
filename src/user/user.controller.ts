import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UserInterface } from 'src/interfaces/user.interface';
import { UserService } from './user.service';
import { UserPipes } from './user.pipes';
import { UserDTO } from './user.dto';
import { UserEnity } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  UserList: UserInterface[] = [];

  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {
    this.UserList = [
      {
        id: 1,
        name: 'Manoj Santra',
        marks: 49,
        role: 43,
        address: 'Singur',
      },
    ];
  }

  @Get('/')

  getUserList(): UserInterface[] {
    return this.UserList;
  }
  @Post('/')
  addUser(
    @Body(new UserPipes(), new ValidationPipe()) newUser: UserDTO,
  ): string {
    return this.userService.addUser(this.UserList, newUser);
  }
}
