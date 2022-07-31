import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TribeModule } from './modules/tribe/tribe.module';

@Module({
  imports: [TribeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
