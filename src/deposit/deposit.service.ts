import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/index';
import Deposit from './deposit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import CreateDepositDto from './dto/deposit.dto';


@Injectable()
export default class DepositService {

  public constructor(
    @InjectRepository(Deposit)
    private readonly deposits: Repository<Deposit>,
  ) {}

  public async createDeposit(payload: CreateDepositDto): Promise<Deposit | null> {
    try {
      return this.deposits.save(new Deposit(payload));
    }
    catch (e) {
      return null;
    }
  }

}