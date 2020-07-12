import { Module } from '@nestjs/common';
import User from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserService from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
    ])
  ],
  providers: [
    UserService,
  ]
})
export class UserModule {}