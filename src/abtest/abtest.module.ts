import { Module } from '@nestjs/common';
import { AbtestService } from './abtest.service';
import { AbtestController } from './abtest.controller';
import { UserService } from './user.service';
import { RandomStrategy } from './strategies/random.strategy';

@Module({
  providers: [AbtestService, UserService, RandomStrategy],
  controllers: [AbtestController],
})
export class AbtestModule {}
