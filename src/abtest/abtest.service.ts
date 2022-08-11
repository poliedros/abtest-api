import {
  BadRequestException,
  Injectable,
  NotImplementedException,
} from '@nestjs/common';
import {
  getTestRunning,
  getTests,
  getTestStopped,
  getTestWithoutError,
} from './variables';
import { ABTestDto } from './dto/abtest.dto';
import { CreateABTestDto } from './dto/create-abtest.dto';
import { GetABTestDto } from './dto/get-abtest.dto';
import { IABTestService } from './interfaces/abtest.service.interface';

@Injectable()
export class AbtestService implements IABTestService {
  create(dto: CreateABTestDto): ABTestDto {
    return {
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
  }

  get(name: string): GetABTestDto {
    return getTestWithoutError;
  }

  get_all(): GetABTestDto[] {
    return getTests;
  }

  delete(name: string): string {
    return 'ok';
  }

  start(name: string): ABTestDto {
    return getTestRunning;
  }

  stop(name: string): ABTestDto {
    return getTestStopped;
  }
}
