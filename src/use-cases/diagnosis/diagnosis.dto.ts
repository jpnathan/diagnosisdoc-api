import { IsNotEmpty } from 'class-validator';

export class DiagnosisDto {
  @IsNotEmpty()
  case: string;

  @IsNotEmpty()
  condition: string;
}
