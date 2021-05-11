import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from '../auth/auth.module';

describe('UserController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [PassportModule, AuthModule],
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = app.get<UsersController>(UsersController);
  });

  describe('root', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
  });
});
