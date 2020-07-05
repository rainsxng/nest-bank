import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';

type ConfigVars =
  | 'DB_HOST'
  | 'DB_PORT'
  | 'DB_USER'
  | 'DB_PASS'
  | 'DB_NAME';

@Injectable()
export default class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
  }

  get(key: ConfigVars): string {
    return this.envConfig[key] || process.env[key];
  }
}
