import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { ShopsController } from './shops/shops.controller';
import { ShopsService } from './shops/shops.service';

@Module({
  imports: [],
  controllers: [UsersController, ShopsController],
  providers: [UsersService, ShopsService],
})
export class AppModule {}
