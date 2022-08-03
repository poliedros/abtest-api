import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbtestModule } from './abtest/abtest.module';
import { User } from './abtest/entities/user.entity';

@Module({
  imports: [
    AbtestModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'ab-test-db-do-user-11976240-0.b.db.ondigitalocean.com',
      port: 25060,
      username: 'doadmin',
      password: 'AVNS_iTc24NZ60mVtUvqxYZX',
      database: 'defaultdb',
      entities: [User],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
