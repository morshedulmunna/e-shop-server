import { Controller, Get } from '@nestjs/common';
import { LoginService } from './services/login.service';

@Controller()
export class AuthController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  getHello() {
    return this.loginService.loginFn();
  }
}
