import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ConditionsService } from './conditions.service';
import { Response } from 'express';
import { handleHttpResponse } from 'src/shared/helpers/http-response';

@Controller('conditions')
export class ConditionsController {
  constructor(private conditionsService: ConditionsService) {}

  @Get('/')
  @UseGuards(AuthGuard())
  public async getConditions(@Res() res: Response): Promise<any> {
    const result = await this.conditionsService.getConditions();
    return handleHttpResponse({ res, result });
  }
}
