import { Module } from '@nestjs/common';
import { DiagnosisController } from './diagnosis.controller';
import { DiagnosisService } from './diagnosis.service';

@Module({
  controllers: [DiagnosisController],
  providers: [DiagnosisService],
  exports: [DiagnosisModule],
})
export class DiagnosisModule {}
