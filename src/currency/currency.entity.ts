import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


interface CurrencyEntity {
  id: number,
  name: string,
  code: string,
  created_at: string,
  updated_at: string,
}

@Entity('currency')
export default class Currency implements CurrencyEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  code: string;

  @Column({ type: 'timestamp without time zone' })
  created_at: string;

  @Column({ type: 'timestamp without time zone' })
  updated_at: string;
}