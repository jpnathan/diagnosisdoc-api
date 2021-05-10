import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { CasesModule } from '../cases/cases.module';
import { UsersModule } from '../users/users.module';
import { DiagnosisModule } from '../diagnosis/diagnosis.module';
import { ConditionsModule } from '../conditions/conditions.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
import { MongoModule } from 'src/shared/mongo/mongo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongoModule,
    AuthModule,
    CasesModule,
    UsersModule,
    DiagnosisModule,
    ConditionsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
