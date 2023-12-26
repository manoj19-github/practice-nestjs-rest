import { Injectable } from '@nestjs/common';
import { UserInterface } from 'src/interfaces/user.interface';

@Injectable()
export class UserService {
  addUser(userList: UserInterface[], newUser: UserInterface): string {
    userList.push(newUser);
    return 'new User created';
  }
}
