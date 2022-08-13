import { Injectable } from '@nestjs/common';
import { fakeUsers } from './variables';
import { User } from './entity/user.entity';
import { IUserService } from './interfaces/user.service.interface';
import { userInfo } from 'os';

@Injectable()
export class UserService implements IUserService {
  getUsers() {
    fakeUsers.forEach((user) => (user.side = ''));
    return fakeUsers;
  }
  getSide(id: number): User {
    return fakeUsers.find((user) => user.id == id);
  }
  changeSide(id: number, newSide: string): User {
    let index = fakeUsers.findIndex((user) => user.id == id);
    fakeUsers[index].side = newSide;
    console.log(fakeUsers)
    return fakeUsers[index];
  }
}
