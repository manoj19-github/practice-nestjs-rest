import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserInterface } from 'src/interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  UserList: UserInterface[] = [];

  constructor(private userService: UserService) {
    this.UserList = [
      {
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
  addUser(@Body() newUser: UserInterface): string {
    return this.userService.addUser(this.UserList, newUser);
  }
}
