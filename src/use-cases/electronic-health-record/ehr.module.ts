import { Module } from '@nestjs/common';
import { EletronicHealthRecordController } from './ehr.controller';
import { EletronicHealthRecordService } from './ehr.service';

@Module({
  controllers: [EletronicHealthRecordController],
  providers: [EletronicHealthRecordService],
  exports: [EletronicHealthRecordModule],
})
export class EletronicHealthRecordModule {}
