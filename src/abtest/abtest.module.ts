import { Module } from '@nestjs/common';
import { AbtestService } from './abtest.service';
import { AbtestController } from './abtest.controller';
import { UserService } from './user.service';

@Module({
  providers: [AbtestService, UserService],
  controllers: [AbtestController],
})
export class AbtestModule {}
