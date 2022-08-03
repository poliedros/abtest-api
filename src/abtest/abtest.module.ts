import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbtestService } from './abtest.service';
import { AbtestController } from './abtest.controller';
import { ABEvent } from './entities/abevent.entity';
import { ABSide } from './entities/abside.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, ABEvent, ABSide])],
  providers: [AbtestService],
  controllers: [AbtestController],
})
export class AbtestModule {}
