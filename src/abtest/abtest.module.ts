import { Module } from '@nestjs/common';
import { AbtestService } from './abtest.service';
import { AbtestController } from './abtest.controller';

@Module({
  providers: [AbtestService],
  controllers: [AbtestController],
})
export class AbtestModule {}
