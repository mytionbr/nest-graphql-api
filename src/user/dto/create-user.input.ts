import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Esse campo não pode ficar em branco' })
  @Field()
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Esse campo não pode ficar em branco' })
  @Field()
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Esse campo não pode ficar em branco' })
  @Field()
  password?: string;
}
