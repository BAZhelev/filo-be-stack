import { FiloService } from './filo.service';
import { InternalServerErrorException } from '@nestjs/common';
import { writeFile } from 'fs';

// Mock the dependencies
jest.mock('fs', () => ({
  writeFile: jest.fn(),
}));

jest.mock('./FILO_STACK.json', () => [], { virtual: true });

const mockedWriteFile = jest.mocked(writeFile);

describe('FiloService', () => {
  let filoService: FiloService;

  beforeEach(() => {
    filoService = new FiloService();
  });

  it('should add a number to the stack', () => {
    filoService.addNumberToStack(1);
    const result = filoService.addNumberToStack(2);

    expect(result).toEqual([2, 1]);
  });

  it('should remove a number from the stack', () => {
    const result = filoService.removeFromStack();
    expect(result).toEqual([1]);
  });

  it('should get the full stack', () => {
    const result = filoService.getFullStack();
    expect(result).toEqual([1]);
  });

  it('should delete the full stack', () => {
    const result = filoService.deleteFullStack();
    expect(result).toEqual([]);
  });

  it('should throw an error if saving the file fails', () => {
    mockedWriteFile.mockImplementationOnce((path, data, callback) => {
      callback(new Error('Mocked error'));
    });

    expect(() => filoService.addNumberToStack(42)).toThrow(
      InternalServerErrorException,
    );
  });
});
