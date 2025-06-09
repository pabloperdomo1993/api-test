import { Module } from '@nestjs/common';
import { UserModule } from './flows/user/user.module';
import { TransactionModule } from './flows/transaction/transaction.module';
import { RestaurantModule } from './flows/restaurant/restaurant.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    TransactionModule,
    RestaurantModule,
    TypeOrmModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  providers: [
    ConfigService
  ]
})
export class AppModule {}
