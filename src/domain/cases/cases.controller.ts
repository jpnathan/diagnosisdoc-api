import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { handleHttpResponse } from 'src/shared/helpers/http-response';
import { CasesService } from './cases.service';

@Controller('cases')
export class CasesController {
  constructor(private casesService: CasesService) {}

  @Get()
  @UseGuards(AuthGuard())
  public async getCases(@Res() res: Response): Promise<any> {
    const result = await this.casesService.getCases();
    return handleHttpResponse({ res, result });
  }
}
