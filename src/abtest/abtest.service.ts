import {
  BadRequestException,
  Injectable,
  NotImplementedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateAbTestDto } from './dto/create-abtest.dto';
import { ABEvent } from './entities/abevent.entity';
import { ABSide } from './entities/abside.entity';
import { User } from './entities/user.entity';

@Injectable()
export class AbtestService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(ABSide) private absideRepository: Repository<ABSide>,
    @InjectRepository(ABEvent) private abeventRepository: Repository<ABEvent>,
  ) {}

  // Get users on application
  getUsers() {
    [{'userId': 1234}, {'userId': 2423}, {'userId': 8752}, {'userId': 6755}, {'userId': 4257}, 
    {'userId': 5720}, {'userId': 5725}, {'userId': 9089}, {'userId': 7626}, {'userId': 6590}]
  }

  async createUsers(users: User[]) {
    const queryRunner = this.dataSource.createQueryRunner();
  
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      users.forEach(user => {
        queryRunner.manager.save(user);
      });
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }  

  async createABTest(dto: CreateAbTestDto) {
    const queryRunner = this.dataSource.createQueryRunner();
  
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(dto);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
      return {
        name: dto.name,
        split_strategy: dto.split_strategy,
        running: false,
        client: dto.client,
        events: [],
        sides: [],
      };
    }
  }

  getABTest(name: string) {
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

  getAllABTests() {
    throw new NotImplementedException();
  }

  deleteABTest(name: string) {
    throw new NotImplementedException();
  }

  startABTest(name: string) {
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

  stopABTest(name: string) {
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
