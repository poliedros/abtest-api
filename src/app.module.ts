import { Module } from '@nestjs/common';
import { AbtestModule } from './abtest/abtest.module';

@Module({
  imports: [AbtestModule],
  controllers: [],
})
export class AppModule {}
