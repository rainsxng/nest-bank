import { Module } from '@nestjs/common';
import Currency from './currency.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import CurrencyService from './currency.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Currency,
    ])
  ],
  providers: [
    CurrencyService,
  ]
})
export class CurrencyModule {}