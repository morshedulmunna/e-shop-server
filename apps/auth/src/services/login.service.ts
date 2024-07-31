import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  loginFn() {
    return {
      message: 'Login Successful',
      data: {},
      token: 'your_jwt_token',
    };
  }
}
