import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { UserService } from '../user/user.service';
import { AuthInput } from './dto/auth.input';
import { AuthType } from './dto/auth.type';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validationUser(data: AuthInput): Promise<AuthType> {
    const user = await this.userService.findUserByEmail(data.email);
    const validPassword = compareSync(data.passoword, user.password);

    if (!validPassword) {
      throw new UnauthorizedException('incorrect password');
    }

    return {
      user,
      token: 'token',
    };
  }
}
