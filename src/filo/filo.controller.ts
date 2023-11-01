import {
  Controller,
  Delete,
  Get,
  Post,
  BadRequestException,
  Query,
} from '@nestjs/common';
import { FiloService } from './filo.service';

@Controller('filo')
export class FiloController {
  constructor(private filoService: FiloService) {}

  @Post()
  addToStack(@Query('number') numToAdd: string) {
    const number = Number(numToAdd);

    if (!number) {
      throw new BadRequestException(
        'Invalid Data Provided, please provide a number',
      );
    }

    return this.filoService.addNumberToStack(number);
  }

  @Delete()
  removeFromStack() {
    return this.filoService.removeFromStack();
  }

  @Get()
  getFullStack() {
    return this.filoService.getFullStack();
  }

  @Delete('all')
  deleteFullStack() {
    return this.filoService.deleteFullStack();
  }
}
