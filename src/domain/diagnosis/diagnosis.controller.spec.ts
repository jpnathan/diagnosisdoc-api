import { Test, TestingModule } from '@nestjs/testing';
import { DiagnosisController } from './diagnosis.controller';
import { DiagnosisService } from './diagnosis.service';
import { AuthModule } from '../auth/auth.module';

describe('DiagnosisController', () => {
  let controller: DiagnosisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
      controllers: [DiagnosisController],
      providers: [
        DiagnosisService,
        {
          provide: 'MONGO_CONNECTION',
          useValue: {},
        },
        {
          provide: 'DIAGNOSIS_MODEL',
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<DiagnosisController>(DiagnosisController);
  });

  describe('root', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
  });
});
