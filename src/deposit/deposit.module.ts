import { Module } from '@nestjs/common';
import DepositService from './deposit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Deposit from './deposit.entity';
import DepositController from './deposit.controller';

@Module({

  imports: [
    TypeOrmModule.forFeature([
      Deposit
    ])
  ],

  controllers: [DepositController],

  providers: [
    DepositService,
  ]
})
export class DepositModule {}
