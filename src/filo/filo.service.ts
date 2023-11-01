import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as FILO_STACK from './FILO_STACK.json';
import { writeFile } from 'fs';
@Injectable()
export class FiloService {
  private saveStack(data: number[]) {
    writeFile(
      'src/filo/FILO_STACK.json',
      JSON.stringify(data, null, 2),
      (err) => {
        if (err) {
          throw new InternalServerErrorException('Failed to save file');
        }
      },
    );
  }

  addNumberToStack(numberToAdd: number) {
    FILO_STACK.unshift(numberToAdd);
    this.saveStack(FILO_STACK);
    return FILO_STACK;
  }

  removeFromStack() {
    FILO_STACK.shift();
    this.saveStack(FILO_STACK);
    return FILO_STACK;
  }

  getFullStack() {
    return FILO_STACK;
  }

  deleteFullStack() {
    this.saveStack([]);

    return [];
  }
}
