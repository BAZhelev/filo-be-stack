import { Test, TestingModule } from '@nestjs/testing';
import { FiloService } from './filo.service';

describe('FiloService', () => {
  let service: FiloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiloService],
    }).compile();

    service = module.get<FiloService>(FiloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
