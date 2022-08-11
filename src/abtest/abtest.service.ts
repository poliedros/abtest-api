import {
  BadRequestException,
  Injectable,
  NotImplementedException,
} from '@nestjs/common';
import {
  fakeTests,
  getTestRunning,
  getTests,
  getTestStopped,
  getTestWithoutError,
} from './variables';
import { ABTestDto } from './dto/abtest.dto';
import { CreateABTestDto } from './dto/create-abtest.dto';
import { GetABTestDto } from './dto/get-abtest.dto';
import { IABTestService } from './interfaces/abtest.service.interface';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AbtestService implements IABTestService {
  constructor(private readonly userService: UserService){}

  create(dto: CreateABTestDto): ABTestDto {
    let newTest = {
      name: dto.name,
      split_strategy: dto.split_strategy,
      running: false,
      client: dto.client,
      events: [
        {
          event: 'create',
          date: new Date(),
        },
      ],
      sides: dto.sides,
    };
    fakeTests.push(newTest);
    return newTest;
  }

  get(name: string): GetABTestDto {
    return fakeTests.find((test) => test.name == name);
  }

  get_all(): GetABTestDto[] {
    return fakeTests;
  }

  delete(name: string): GetABTestDto[] {
    let index = fakeTests.findIndex((test) => test.name == name);
    return fakeTests.splice(index);
  }

  checkSides(users: UserDto[], test: ABTestDto) {
    const usersSides = users.filter((user) => user.side);
    const sidesProportion = test.sides.filter((side) => side.size);
    console.log(usersSides);
    console.log(sidesProportion);
  }

  splitUsers(users: UserDto[], test: ABTestDto) {
    if (test.split_strategy == 'random') {
      test.sides.forEach((side) => {
        let numUsers = Math.floor(side.size * users.length);

        for (let i = 0; i < numUsers; i++) {
          let randomUser = Math.floor(Math.random() * users.length);
          users[randomUser].side = side.label;
        }
      });
    }
    this.checkSides(users, test);
    return users;
  }

  start(name: string): ABTestDto {
    let test = fakeTests.find((test) => test.name == name);
    let users = this.userService.getUsers();
    users = this.splitUsers(users, test);

    let index = fakeTests.findIndex((test) => test.name == name);
    fakeTests[index].running = true;
    return fakeTests[index];
  }

  stop(name: string): ABTestDto {
    let index = fakeTests.findIndex((test) => test.name == name);
    fakeTests[index].running = false;
    return fakeTests[index];
  }
}
