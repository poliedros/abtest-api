import { Injectable } from '@nestjs/common';
import { ABTestDto } from '../dto/abtest.dto';
import { UserDto } from '../dto/user.dto';
import { IStrategy } from '../interfaces/strategy.interface';

@Injectable()
export class RandomStrategy implements IStrategy {
  splitUsers(users: UserDto[], test: ABTestDto): UserDto[] {
    if (test.split_strategy == 'random') {
      test.sides.forEach((side) => {
        const numUsers = Math.floor(side.size * users.length);

        for (let i = 0; i < numUsers; i++) {
          const unsorted = users.filter((obj) => obj.side == '');
          const n = Math.floor(Math.random() * unsorted.length);

          const userIndex = users.findIndex((obj) => {
            return obj.id === unsorted[n].id;
          });
          users[userIndex].side = side.label;
        }
      });
    }
    if (this.checkSides(users, test)) return users;
  }
  checkSides(users: UserDto[], test: ABTestDto): boolean {
    let props = [];
    test.sides.forEach((side) => {
      const numUsers = users.filter((user) => user.side == side.label).length;
      console.log(numUsers);
      props.push({
        side: side.label,
        proportion: side.size,
        propUsers: numUsers / users.length,
        diff: side.size - numUsers / users.length,
      });
    });

    console.log(props);
    console.log(users);
    return true;
  }
}
