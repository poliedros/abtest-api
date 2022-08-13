import { Module } from '@nestjs/common';
import { AbtestService } from './abtest.service';
import { AbtestController } from './abtest.controller';
import { UserService } from './user.service';
import { RandomStrategy } from './strategies/random.strategy';
import { UserController } from './user.controller';

@Module({
  providers: [AbtestService, UserService, RandomStrategy],
  controllers: [AbtestController, UserController],
})
export class AbtestModule {}
