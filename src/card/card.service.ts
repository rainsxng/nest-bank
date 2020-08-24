import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/index';
import Card from './card.entity';
import AddCardPayload from './dto/card.dto';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export default class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cards: Repository<Card>
  ) {}

  public async addCard(payload: AddCardPayload): Promise<Card | null> {
    try {
      return this.cards.save(new Card(payload));
    }
    catch (e) {
      console.log('An error occurred', e);
      return null;
    }
  }

  private async getCardById(id: number) :Promise<Card | null> {
    try {
      return this.cards.findOneOrFail({
        relations: ['user', 'currency'],
        where: {
          id,
        }
      });
    }
    catch (e) {
      return null;
    }
  }
 }