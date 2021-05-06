import { Test, TestingModule } from '@nestjs/testing';
import { DiagnosisController } from './diagnosis.controller';
import { DiagnosisService } from './diagnosis.service';

describe('DiagnosisController', () => {
  let controller: DiagnosisController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DiagnosisController],
      providers: [DiagnosisService],
    }).compile();

    controller = app.get<DiagnosisController>(DiagnosisController);
  });

  describe('root', () => {});
});
