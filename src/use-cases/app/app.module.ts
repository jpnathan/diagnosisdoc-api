import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { CasesModule } from '../cases/cases.module';
import { UserModule } from '../user/user.module';
import { DiagnosisService } from '../diagnosis/diagnosis.service';
import { ConditionsModule } from '../conditions/conditions.module';

@Module({
  imports: [CasesModule, UserModule, DiagnosisService, ConditionsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
