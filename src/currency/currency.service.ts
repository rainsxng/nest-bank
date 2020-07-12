
import { InjectRepository } from '@nestjs/typeorm';
import Currency from './currency.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class CurrencyService {
  constructor(
    @InjectRepository(Currency)
    private readonly currencies: Repository<Currency>
  ) {}

  public async getAll() {
    return this.currencies.find();
  }

}