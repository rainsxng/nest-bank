import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

interface UserEntity {
  id: number,
  name: string,
  email: string,
  phone: string,
  password: string,
  created_at: string,
  updated_at: string,
}


@Entity('users')
export default class User implements UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  phone: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'datetime' })
  created_at: string;

  @Column({ type: 'datetime' })
  updated_at: string;
}