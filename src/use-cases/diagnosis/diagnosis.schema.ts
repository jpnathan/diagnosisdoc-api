import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Diagnosis {
  @Prop({ required: true })
  case: string;

  @Prop({ required: true })
  condition: string[];

  @Prop({ required: true })
  user: string;
}

export const DiagnosisSchema = SchemaFactory.createForClass(Diagnosis);
export type DiagnosisDocument = Diagnosis & Document;
