import { Injectable } from '@nestjs/common';
import { JwtPayload } from '../auth/auth.inteface';
import { UserDto } from './users.dto';
import { IUser } from './users.interface';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: '1as3da65s1d6',
      email: 'john.doe@email.com',
      password: 'changeme',
    },
  ];

  async findOne(payload: JwtPayload): Promise<UserDto | undefined> {
    return this.users.find((user) => user.email === payload.email);
  }
}
