import { Module } from '@nestjs/common';
import { TransitionController } from './controllers/transition.controller';
import { TransitionService } from './services/transition.service';

@Module({
  imports: [],
  controllers: [TransitionController],
  providers: [TransitionService],
  exports: [TransitionService],
})
export class TransitionModule {}
