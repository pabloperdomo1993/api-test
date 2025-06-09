import { Module } from '@nestjs/common';
import { UserModule } from './flows/user/user.module';
import { TransactionModule } from './flows/transaction/transaction.module';
import { RestaurantModule } from './flows/restaurant/restaurant.module';

@Module({
  imports: [
    UserModule,
    TransactionModule,
    RestaurantModule
  ]
})
export class AppModule {}
