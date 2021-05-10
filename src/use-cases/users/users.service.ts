import { Injectable } from '@nestjs/common';
import { JwtPayload } from '../auth/auth.inteface';
import { IUserResponse } from './users.interface';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: '1as3da65s1d6',
      email: 'john.doe@email.com',
      password: 'changeme',
    },
  ];

  async findOne(payload: JwtPayload): Promise<IUserResponse | undefined> {
    const { password, ...result } = this.users.find(
      (user) => user.email === payload.email,
    );
    return result;
  }
}
