import { Injectable, Inject } from '@nestjs/common';
import CostDto from '../dto/cost.dto';
import { CostRepository } from 'src/domain/ports/cost.repository';

@Injectable()
export default class CostService { 

    constructor(@Inject('CostRepositoryMongo') private costRepository: CostRepository) { }

    async createCost(cost: CostDto): Promise<CostDto> {
        cost.totalCost = 25;
        const createService = await this.costRepository.createCost(cost);
        return createService;
    }

    getAll(): Promise<CostDto[]> {        
        return this.costRepository.getAll();  
    }

    getCost(costId: string): Promise<CostDto> {
      return this.costRepository.getCost(costId);
    }

    deleteCost(id: string): Promise<CostDto> {
        return this.costRepository.deleteCost(id);
    }

    updateCost(costId: string, cost: CostDto): Promise<CostDto>{
        return this.costRepository.updateCost(costId, cost);
    }

}




