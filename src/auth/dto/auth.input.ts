import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AuthInput {
  @Field()
  email: string;
  @Field()
  passoword: string;
}
