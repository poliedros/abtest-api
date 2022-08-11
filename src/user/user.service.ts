import { Injectable } from '@nestjs/common';
import { fakeUsers } from 'src/abtest/variables';
import { User } from 'src/abtest/entity/user.entity';
import { IUserService } from 'src/abtest/interfaces/user.service.interface';
import { userInfo } from 'os';

@Injectable()
export class UserService implements IUserService {
  getUsers() {
    return fakeUsers;
  }
  getSide(id: number): User {
    return fakeUsers.find((user) => user.id == id);
  }
  changeSide(id: number, newSide: string): User {
    var index = fakeUsers.findIndex((user) => user.id == id);
    fakeUsers[index].side = newSide;
    return fakeUsers[index];
  }
}
