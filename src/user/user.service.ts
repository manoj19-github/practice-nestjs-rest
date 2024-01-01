import { Injectable } from '@nestjs/common';
import { UserInterface } from 'src/interfaces/user.interface';
import { UserMarksException } from './user.exception';
import { UserEnity } from './user.entity';

@Injectable()
export class UserService {
  adminUsers: UserEnity[] = [
    {
      username: 'user1',
      password: '1223',
      email: 'user1@gmail.com',
    },
    {
      username: 'user2',
      password: '1234',
      email: 'user2@gmail.com',
    },
  ];
  addUser(userList: UserInterface[], newUser: UserInterface): string {
    if (newUser.marks < 10 || newUser.marks > 100)
      throw new UserMarksException();
    userList.push(newUser);
    return 'new User created';
  }
  getAdminUserByName(username: string): UserEnity {
    return this.adminUsers.find((self) => self.username === username);
  }
}
