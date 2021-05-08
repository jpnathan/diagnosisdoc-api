import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ICase } from './cases.interface';
import { CasesService } from './cases.service';

@Controller('cases')
export class CasesController {
  constructor(private casesService: CasesService) {}

  @Get()
  @UseGuards(AuthGuard())
  public getCases(): Promise<ICase[]> {
    return this.casesService.getCases();
  }
}
