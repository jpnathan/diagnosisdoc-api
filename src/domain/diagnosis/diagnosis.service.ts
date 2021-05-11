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

  public async getAll(user: any): Promise<DiagnosisDocument[]> {
    try {
      return await this.diagnosisModel.find({ user: user.id });
    } catch (error) {
      throw new Error('Can not create diagnosis properly.');
    }
  }
}
