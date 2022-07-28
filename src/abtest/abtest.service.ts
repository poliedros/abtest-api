import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateAbTestDto } from './dto/create-abtest.dto';

@Injectable()
export class AbtestService {
  create(dto: CreateAbTestDto) {
    return {
      name: dto.name,
      split_strategy: dto.split_strategy,
      running: false,
      client: dto.client,
      events: [],
      sides: [],
    };
  }

  get(name: string) {
    return {
      name: 'Teste de teste',
      split_strategy: 'random',
      running: false,
      client: 'Carlos safado',
      events: [],
      sides: [
        {
          label: 'a',
          size: 30,
          algorithm: 'alg1',
        },
        {
          label: 'aa',
          size: 30,
          algorithm: 'alg2',
        },
        {
          label: 'b',
          size: 30,
          algorithm: 'alg3',
        },
      ],
    };
  }

  get_all() {
    throw new NotImplementedException();
  }

  delete(name: string) {
    throw new NotImplementedException();
  }

  start(name: string) {
    return {
      name: 'Um teste AB qualquer',
      split_strategy: 'random',
      running: true,
      client: 'czar+',
      events: [
        {
          event: 'start',
          date: 'today',
        },
      ],
      sides: [
        {
          label: 'a',
          size: 30,
          algorithm: 'alg1',
        },
        {
          label: 'aa',
          size: 30,
          algorithm: 'alg2',
        },
        {
          label: 'b',
          size: 30,
          algorithm: 'alg3',
        },
      ],
    };
  }

  stop(name: string) {
    return {
      name: 'Um teste AB qualquer',
      split_strategy: 'random',
      running: false,
      client: 'czar+',
      events: [
        {
          event: 'start',
          date: 'today',
        },
        {
          event: 'start',
          date: 'later today',
        },
      ],
      sides: [
        {
          label: 'a',
          size: 30,
          algorithm: 'alg1',
        },
        {
          label: 'aa',
          size: 30,
          algorithm: 'alg2',
        },
        {
          label: 'b',
          size: 30,
          algorithm: 'alg3',
        },
      ],
    };
  }
}
