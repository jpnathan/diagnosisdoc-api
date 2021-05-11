import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { DiagnosisController } from './diagnosis.controller';
import { diagnosisProviders } from './diagnosis.provider';
import { DiagnosisService } from './diagnosis.service';

@Module({
  imports: [AuthModule],
  controllers: [DiagnosisController],
  providers: [...diagnosisProviders, DiagnosisService],
  exports: [DiagnosisModule],
})
export class DiagnosisModule {}
