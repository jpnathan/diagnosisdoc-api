import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { ConditionsController } from './conditions.controller';
import { ConditionsService } from './conditions.service';

@Module({
  imports: [AuthModule],
  controllers: [ConditionsController],
  providers: [ConditionsService],
  exports: [ConditionsModule],
})
export class ConditionsModule {}
