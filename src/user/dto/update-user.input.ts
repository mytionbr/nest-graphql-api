import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Esse campo não pode ficar em branco' })
  @IsOptional()
  @Field()
  name?: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Esse campo não pode ficar em branco' })
  @IsOptional()
  @Field()
  email?: string;

  @IsString()
  @IsOptional()
  @Field()
  password?: string;
}
