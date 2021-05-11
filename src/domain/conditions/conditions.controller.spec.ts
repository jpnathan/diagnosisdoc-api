import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthModule } from '../auth/auth.module';
import { ConditionsController } from './conditions.controller';
import { ConditionsService } from './conditions.service';

describe('DiagnosisController', () => {
  let controller: ConditionsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [PassportModule, AuthModule],
      controllers: [ConditionsController],
      providers: [ConditionsService],
    }).compile();

    controller = app.get<ConditionsController>(ConditionsController);
  });

  describe('root', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
  });
});
