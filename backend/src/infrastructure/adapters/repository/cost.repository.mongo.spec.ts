import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import ServiceRepositoryMongo  from './cost.repository.mongo';

import CostDto from './../../../domain/dto/cost.dto';

const cost: CostDto = {
    id: 'asd12345678',
    type: 'cost type',
    amount: 5,
    value: 20000,
    totalCost: 0,
    createAt: new Date()
}

describe('--- ServiceRepositoryMongo ---', () => {

  let service: ServiceRepositoryMongo;

  const costModel = {
    save: jest.fn().mockResolvedValue(cost),
    find: jest.fn().mockResolvedValue([cost]),
    findById: jest.fn().mockResolvedValue(cost),
    findByIdAndUpdate: jest.fn().mockResolvedValue(cost),
    findByIdAndDelete: jest.fn().mockResolvedValue(cost),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ServiceRepositoryMongo,
        {
          provide: getModelToken('Cost'),
          useValue: costModel,
        },
      ],
    }).compile();

    service = module.get<ServiceRepositoryMongo>(ServiceRepositoryMongo);
  });

  it('should return all the cost', () => {
    expect(service.getAll()).resolves.toEqual([cost]);
  });

  it('should return one cost', () => {
    expect(service.getCost(cost.id)).resolves.toEqual(cost);
  });

  it('should update cost', () => {
    expect(service.updateCost(cost.id, cost)).resolves.toEqual(cost);
  });

  it('should create cost', () => {
    expect(service.createCost(cost)).resolves.toEqual(cost);
  });

  it('should delete cost', () => {
    expect(service.deleteCost(cost.id)).resolves.toEqual(cost);
  });

});