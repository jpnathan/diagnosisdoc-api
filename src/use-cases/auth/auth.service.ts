import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUserResponse } from '../users/users.interface';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from './auth.dto';
import { JwtPayload, LoginStatus } from './auth.inteface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
    const user = await this.usersService.findOne(loginUserDto);
    const token = this.createToken(user);

    return {
      email: user.email,
      ...token,
    };
  }

  private createToken({ email }: LoginUserDto): any {
    const user = { email };
    const accessToken = this.jwtService.sign(user);
    return {
      accessToken,
    };
  }

  public async validateUser(payload: JwtPayload): Promise<IUserResponse> {
    const user = await this.usersService.findOne({
      email: payload.email,
    });
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}
