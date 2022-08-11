import { Module } from '@nestjs/common';
import { AbtestModule } from './abtest/abtest.module';
import { UserService } from './user/user.service';

@Module({
  imports: [AbtestModule],
  controllers: [],
  providers: [UserService],
})
export class AppModule {}
