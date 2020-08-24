import { Body, Controller, Post } from '@nestjs/common';
import AddCardPayload from './dto/card.dto';
import CardService from './card.service';


@Controller('card')
export default class CardController {

  constructor(
    private readonly cardService: CardService,
  ) {}

  @Post('/')
  create(@Body() payload: AddCardPayload) {
    return this.cardService.addCard(payload);
  }

}