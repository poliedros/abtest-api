import { Injectable } from '@nestjs/common';
import { fakeTests } from './variables';
import { ABTestDto } from './dto/abtest.dto';
import { CreateABTestDto } from './dto/create-abtest.dto';
import { GetABTestDto } from './dto/get-abtest.dto';
import { IABTestService } from './interfaces/abtest.service.interface';
import { UserService } from './user.service';
import { RandomStrategy } from './strategies/random.strategy';

@Injectable()
export class AbtestService implements IABTestService {
  constructor(
    private readonly userService: UserService,
    private readonly randomStrategy: RandomStrategy,
  ) {}

  create(dto: CreateABTestDto): ABTestDto {
    let newTest = {
      name: dto.name,
      split_strategy: dto.split_strategy,
      running: false,
      client: dto.client,
      events: [
        {
          event: 'created',
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

  getAll(): GetABTestDto[] {
    return fakeTests;
  }

  delete(name: string): GetABTestDto[] {
    let index = fakeTests.findIndex((test) => test.name == name);
    return fakeTests.splice(index);
  }

  start(name: string): ABTestDto {
    const test = fakeTests.find((test) => test.name == name);
    let users = this.userService.getUsers();
    users = this.randomStrategy.splitUsers(users, test);

    const index = fakeTests.findIndex((test) => test.name == name);
    fakeTests[index].running = true;
    fakeTests[index].events.push({
      event: 'started',
      date: new Date(),
    });
    return fakeTests[index];
  }

  stop(name: string): ABTestDto {
    let index = fakeTests.findIndex((test) => test.name == name);
    fakeTests[index].running = false;
    fakeTests[index].events.push({
      event: 'stopped',
      date: new Date(),
    });
    return fakeTests[index];
  }
}
