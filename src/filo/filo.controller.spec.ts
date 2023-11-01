import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { Test, TestingModule } from '@nestjs/testing';
import { FiloController } from './filo.controller';
import { FiloService } from './filo.service';
import { BadRequestException } from '@nestjs/common';

describe('FiloController', () => {
  let filoController: FiloController;
  let filoService: DeepMocked<FiloService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiloController],
      providers: [
        {
          provide: FiloService,
          useValue: createMock<FiloService>(),
        },
      ],
    }).compile();

    filoController = module.get<FiloController>(FiloController);
    filoService = module.get(FiloService);
  });

  it('should be defined', () => {
    expect(filoController).toBeDefined();
  });

  describe('addToStack', () => {
    it('should add a number to the stack', async () => {
      const numberToAdd = '42';
      const expectedResult = [42];

      filoService.addNumberToStack.mockReturnValue(expectedResult);

      expect(filoController.addToStack(numberToAdd)).toStrictEqual(
        expectedResult,
      );
    });

    it('should handle invalid input', () => {
      const numberToAdd = 'invalid';
      const errorResponse = new BadRequestException(
        'Invalid Data Provided, please provide a number',
      );

      expect(() => filoController.addToStack(numberToAdd)).toThrow(
        errorResponse,
      );
    });
  });

  describe('removeFromStack', () => {
    it('should remove a number from the stack', () => {
      const expectedResult = [];

      filoService.removeFromStack.mockReturnValue(expectedResult);

      expect(filoController.removeFromStack()).toStrictEqual(expectedResult);
    });
  });

  describe('getFullStack', () => {
    it('should return the full stack', () => {
      const expectedResult = [1, 2, 3];

      filoService.getFullStack.mockReturnValue(expectedResult);

      expect(filoController.getFullStack()).toStrictEqual(expectedResult);
    });
  });

  describe('deleteFullStack', () => {
    it('should delete the full stack', () => {
      const expectedResult = [];

      filoService.deleteFullStack.mockReturnValue(expectedResult);

      expect(filoController.deleteFullStack()).toStrictEqual(expectedResult);
    });
  });
});
