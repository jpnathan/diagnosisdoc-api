import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthModule } from '../auth/auth.module';
import { CasesController } from './cases.controller';
import { CasesService } from './cases.service';

describe('CasesController', () => {
  let controller: CasesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [PassportModule, AuthModule],
      controllers: [CasesController],
      providers: [CasesService],
    }).compile();

    controller = app.get<CasesController>(CasesController);
  });

  describe('root', () => {
    it('Should be defined', () => {
      expect(controller).toBeDefined();
    });
  });
});
