import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm/index';
import CreateDepositDto from './dto/deposit.dto';


@Entity()
export default class Deposit {

  constructor(payload: CreateDepositDto) {
    Object.assign(this, payload)
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', unsigned: true })
  account_id: number;

  @Column({ type: 'int', unsigned: true })
  plan_id: number;

  @Column({ type: 'timestamp without time zone' })
  start_date: Date;

  @Column({ type: 'timestamp without time zone' })
  end_date: Date;

  @Column({ default: () => `now()` })
  created_at: Date;

  @Column({ default: () => `now()` })
  updated_at: Date;
}