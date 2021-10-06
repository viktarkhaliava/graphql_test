import { Inject } from '@nestjs/common';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { NewUserInput } from './dto/new-user.input';
import { UserModel } from './models/user.model';
import { UsersService } from './users.service';

@Resolver(() => UserModel)
export class UsersResolver {
    constructor(
        private readonly usersService: UsersService,
    ) {}

    @Query(() => UserModel)
    async user(@Args('id') id: number): Promise<UserModel> {
        return this.usersService.getOne(id);
    }

    @Query(() => [UserModel])
    async users(): Promise<UserModel[]> {
        return this.usersService.getMany();
    }

    @Mutation(() => UserModel)
    async createUser(@Args('newUserInput') newUserInput: NewUserInput): Promise<UserModel> {
        return this.usersService.createUser(newUserInput);
    }

    @Mutation(() => UserModel)
    async editUser(@Args('editUserInput') editUserInput: NewUserInput): Promise<UserModel> {
        return this.usersService.editUser(editUserInput);
    }
}
