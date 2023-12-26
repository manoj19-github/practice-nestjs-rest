import { Injectable } from '@nestjs/common';
import { UserInterface } from 'src/interfaces/user.interface';
import { UserMarksException } from './user.exception';

@Injectable()
export class UserService {
  addUser(userList: UserInterface[], newUser: UserInterface): string {
    if (newUser.marks < 10 || newUser.marks > 100)
      throw new UserMarksException();
    userList.push(newUser);
    return 'new User created';
  }
}
