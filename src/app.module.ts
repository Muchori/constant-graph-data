import { Module } from '@nestjs/common';
import { TransitionModule } from './modules/node/transition.module';

@Module({
  imports: [TransitionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
