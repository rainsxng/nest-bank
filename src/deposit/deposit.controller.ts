import { Body, Controller, Post } from '@nestjs/common';
import DepositService from './deposit.service';
import CreateDepositDto from './dto/deposit.dto';


@Controller('deposit')
export default class DepositController {

  constructor(
    private readonly depositService: DepositService,
  ) {}

  @Post('/')
  create(@Body() payload: CreateDepositDto) {
    return this.depositService.createDeposit(payload);
  }

}