import { Controller, Get } from '@nestjs/common';
import { ICase } from './cases.interface';
import { CasesService } from './cases.service';

@Controller('cases')
export class CasesController {
  constructor(private casesService: CasesService) {}

  @Get()
  public getCases(): Promise<ICase[]> {
    return this.casesService.getCases();
  }
}
