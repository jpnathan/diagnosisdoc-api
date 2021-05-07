import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto } from './auth.dto';
import { LoginStatus } from './auth.inteface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async login(@Body() loginUserDto: LoginUserDto): Promise<LoginStatus> {
    return await this.authService.login(loginUserDto);
  }
}
