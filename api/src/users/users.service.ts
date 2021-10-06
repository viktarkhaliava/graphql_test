import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewUserInput } from './dto/new-user.input';
import { UserModel } from './models/user.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserModel)
        private readonly usersRepository: Repository<UserModel>,
    ) {}
    public async getOne(id: number): Promise<UserModel> {
        return this.usersRepository.findOne({ where: { id } });
    }

    public async getMany(): Promise<UserModel[]> {
        return this.usersRepository.find();
    }

    public async createUser(newUserInput: NewUserInput): Promise<UserModel> {
        return this.usersRepository.save(newUserInput);
    }

    public async editUser(editUserInput: NewUserInput): Promise<UserModel> {
        return { ...editUserInput, id: 3 };
    }
}
