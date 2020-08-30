import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import ConfigService from './config/config.service';
import ConfigModule from './config/config.module';
import { UserModule } from './user/user.module';
import { CurrencyModule } from './currency/currency.module';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { CardModule } from './card/card.module';
import { DepositModule } from './deposit/deposit.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService): Promise<PostgresConnectionOptions> => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: Number(configService.get('DB_PORT')),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_NAME'),
        synchronize: true,
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
    CardModule,
    DepositModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
