import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './models/user.model';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}
