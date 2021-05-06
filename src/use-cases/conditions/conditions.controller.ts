import { Controller, Get } from '@nestjs/common';
import { ConditionsService } from './conditions.service';

@Controller()
export class ConditionsController {
  constructor(private conditionsService: ConditionsService) {}

  @Get()
  public getConditions() {
    return this.conditionsService.getConditions();
  }
}
