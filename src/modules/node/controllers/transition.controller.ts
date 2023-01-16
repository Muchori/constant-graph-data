import { Controller, Get, Param } from '@nestjs/common';
import { TransitionService } from '../services/transition.service';

@Controller('transition')
export class TransitionController {
  constructor(private readonly transitionService: TransitionService) {}

  @Get(':currentState/:transition')
  getNextState(
    @Param('currentState') currentState: number,
    @Param('transition') transition: string,
  ) {
    return this.transitionService.getNextState(currentState, transition);
  }

  @Get('bulk/:currentStates/:transition')
  getPathForBulk(
    @Param('currentStates') currentStates: number[],
    @Param('transition') transition: string,
  ) {
    return this.transitionService.getPathForBulk(currentStates, transition);
  }
}
