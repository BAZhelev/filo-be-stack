import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FiloModule } from './filo/filo.module';

@Module({
  imports: [FiloModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
