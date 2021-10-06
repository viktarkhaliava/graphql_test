import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType({ description: 'user' })
@Entity({ name: 'users' })
export class UserModel {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    email: string;

    @Field(() => String)
    @Column()
    password: string;
}