import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ConditionsService } from './conditions.service';

@Controller('conditions')
export class ConditionsController {
  constructor(private conditionsService: ConditionsService) {}

  @Get('/')
  @UseGuards(AuthGuard())
  public getConditions() {
    return this.conditionsService.getConditions();
  }
}
