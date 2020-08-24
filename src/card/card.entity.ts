import { Entity } from 'typeorm';
import { Column, ManyToOne, OneToOne } from 'typeorm/index';
import { PrimaryGeneratedColumnType } from 'typeorm/driver/types/ColumnTypes';
import User from '../user/user.entity';
import Currency from '../currency/currency.entity';
import AddCardPayload from './dto/card.dto';


@Entity('cards')
export default class Card {

  constructor(payload?: AddCardPayload) {
    Object.assign(this, payload);
  }

  @Column({ type: 'int', unsigned: true, primary: true })
  id: PrimaryGeneratedColumnType;

  @Column({ type: 'varchar', unique: true })
  number: string;

  @Column({ type: 'varchar' })
  vendor: string;

  @Column({ type: 'int', unsigned: true })
  cvv: number;

  @Column({ type: 'int', unsigned: true })
  amount: number;

  @Column({ type: 'int', unsigned: true })
  user_id: number;

  @Column({ type: 'int', unsigned: true })
  currency_id: number;

  @Column({ type: 'timestamp without time zone' })
  created_at: string;

  @Column({ type: 'timestamp without time zone' })
  updated_at: string;

  @ManyToOne(() => User, user => user.cards)
  user: User;

  @OneToOne(() => Currency, currency => currency.card)
  currency: Currency;
}