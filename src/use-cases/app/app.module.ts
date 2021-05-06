import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { EletronicHealthRecordModule } from '../electronic-health-record/ehr.module';
import { UserModule } from '../user/user.module';
import { DiagnosisService } from '../diagnosis/diagnosis.service';

@Module({
  imports: [EletronicHealthRecordModule, UserModule, DiagnosisService],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
