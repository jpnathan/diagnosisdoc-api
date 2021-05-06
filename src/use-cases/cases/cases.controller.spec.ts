import { Test, TestingModule } from '@nestjs/testing';
import { CasesController } from './cases.controller';
import { CasesService } from './cases.service';

describe('CasesController', () => {
  let controller: CasesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CasesController],
      providers: [CasesService],
    }).compile();

    controller = app.get<CasesController>(CasesController);
  });

  describe('root', () => {
    it('should return array of conditions', async () => {
      const conditions = await controller.getCases();
      expect(conditions).toHaveLength(3);
    });
  });
});
