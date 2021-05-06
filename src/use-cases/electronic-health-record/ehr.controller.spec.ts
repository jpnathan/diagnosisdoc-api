import { Test, TestingModule } from '@nestjs/testing';
import { EletronicHealthRecordController } from './ehr.controller';
import { EletronicHealthRecordService } from './ehr.service';

describe('EletronicHealthRecordController', () => {
  let controller: EletronicHealthRecordController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EletronicHealthRecordController],
      providers: [EletronicHealthRecordService],
    }).compile();

    controller = app.get<EletronicHealthRecordController>(
      EletronicHealthRecordController,
    );
  });

  describe('root', () => {});
});
