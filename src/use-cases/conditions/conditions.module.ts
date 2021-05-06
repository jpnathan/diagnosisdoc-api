import { Module } from '@nestjs/common';
import { ConditionsController } from './conditions.controller';
import { ConditionsService } from './conditions.service';

@Module({
  controllers: [ConditionsController],
  providers: [ConditionsService],
  exports: [ConditionsModule],
})
export class ConditionsModule {}
