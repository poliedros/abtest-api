import { Module } from '@nestjs/common';
import { AbtestModule } from './abtest/abtest.module';
import { UserController } from './abtest/user.controller';

@Module({
  imports: [AbtestModule],
})
export class AppModule {}
