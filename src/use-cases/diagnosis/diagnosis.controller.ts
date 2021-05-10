import {
  Body,
  Controller,
  Post,
  Res,
  Req,
  UseGuards,
  Get,
} from '@nestjs/common';
import { handleHttpResponse } from 'src/shared/helpers/http-response';
import { DiagnosisDto } from './diagnosis.dto';
import { DiagnosisService } from './diagnosis.service';
import { Response, Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('diagnosis')
@UseGuards(AuthGuard())
export class DiagnosisController {
  constructor(private readonly diagnosisService: DiagnosisService) {}

  @Post('/')
  public async create(
    @Req() req: Request,
    @Res() res: Response,
    @Body() diagnosisDto: DiagnosisDto,
  ): Promise<any> {
    const result = await this.diagnosisService.create(req.user, diagnosisDto);
    return handleHttpResponse({ res, result });
  }

  @Get('/')
  public async getAll(@Req() req: Request, @Res() res: Response): Promise<any> {
    const result = await this.diagnosisService.getAll(req.user);
    return handleHttpResponse({ res, result });
  }
}
