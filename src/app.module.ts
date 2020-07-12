import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import ConfigService from './config/config.service';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import ConfigModule from './config/config.module';
import { UserModule } from './user/user.module';
import { CurrencyModule } from './currency/currency.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService): Promise<MysqlConnectionOptions> => ({
        type: 'mysql',
        timezone: 'utc',
        host: configService.get('DB_HOST'),
        port: Number(configService.get('DB_PORT')),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_NAME'),
        synchronize: false,
        entities: [`${__dirname}/**/*.entity{.ts,.js}`],
        // logging: configService.get('NODE_ENV') !== 'production' ? ['query', 'error'] : undefined,
        migrationsRun: true,
        migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
        cli: {
          // Location of migration should be inside src folder
          // to be compiled into dist/ folder.
          migrationsDir: 'src/migrations',
        },
      }),
      inject: [ConfigService],
    }),
    UserModule,
    CurrencyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
