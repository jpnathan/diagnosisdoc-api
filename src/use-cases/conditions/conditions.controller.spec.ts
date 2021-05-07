import { Test, TestingModule } from '@nestjs/testing';
import { ConditionsController } from './conditions.controller';
import { ConditionsService } from './conditions.service';

describe('DiagnosisController', () => {
  let controller: ConditionsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ConditionsController],
      providers: [ConditionsService],
    }).compile();

    controller = app.get<ConditionsController>(ConditionsController);
  });

  describe('root', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });

    it('should return array of conditions', async () => {
      const conditions = await controller.getConditions();
      expect(conditions).toHaveLength(122);
      expect(conditions[0]).toMatchObject({
        id: 'A09',
        name: 'Infectious gastroenteritis and colitis, unspecified',
      });
    });
  });
});
