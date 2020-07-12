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

  @Column({ type: 'datetime' })
  created_at: string;

  @Column({ type: 'datetime' })
  updated_at: string;
}