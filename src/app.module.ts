import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransitionModule } from './modules/node/transition.module';

@Module({
  imports: [TransitionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
