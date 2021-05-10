import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DiagnosisDto } from './diagnosis.dto';
import { DiagnosisDocument } from './diagnosis.schema';

@Injectable()
export class DiagnosisService {
  constructor(
    @Inject('DIAGNOSIS_MODEL')
    private readonly diagnosisModel: Model<DiagnosisDocument>,
  ) {}

  public create(
    user: any,
    diagnosisDto: DiagnosisDto,
  ): Promise<DiagnosisDocument> {
    try {
      const diagnosis = { ...diagnosisDto, user: user.id };
      return this.diagnosisModel.create(diagnosis);
    } catch (error) {}
  }
}
