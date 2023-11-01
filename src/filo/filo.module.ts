import { Module } from '@nestjs/common';
import { FiloController } from './filo.controller';
import { FiloService } from './filo.service';

@Module({
  controllers: [FiloController],
  providers: [FiloService]
})
export class FiloModule {}
