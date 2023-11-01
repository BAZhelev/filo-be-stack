import { Test, TestingModule } from '@nestjs/testing';
import { FiloController } from './filo.controller';

describe('FiloController', () => {
  let controller: FiloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiloController],
    }).compile();

    controller = module.get<FiloController>(FiloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
