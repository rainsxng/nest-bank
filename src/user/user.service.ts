import { InjectRepository } from '@nestjs/typeorm';
import User from './user.entity';
import { Repository } from 'typeorm';


export default class UserService {
  constructor(
    @InjectRepository(User)
    private readonly users: Repository<User>
  ) {}

  public async getAll() {
    return this.users.find();
  }

}