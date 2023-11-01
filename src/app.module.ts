import { Module } from '@nestjs/common';
import { FiloModule } from './filo/filo.module';

@Module({
  imports: [FiloModule],
})
export class AppModule {}
