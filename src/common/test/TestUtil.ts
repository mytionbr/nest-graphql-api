import { User } from '../../user/user.entity';

export default class TestUtil {
  static giveMeAValidUser(): User {
    const user = new User();
    user.email = 'test@email.com';
    user.name = 'fulano de tal';
    user.id = '1';
    user.password = '123456';

    return user;
  }
}
