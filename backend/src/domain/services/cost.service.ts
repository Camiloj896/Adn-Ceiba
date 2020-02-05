import { Injectable, Inject } from '@nestjs/common';
import Cost from '../dto/cost.dto';
import { CostRepository } from 'src/domain/ports/cost.repository';

@Injectable()
export class CostService {

    constructor(@Inject('CostRepository') private costRepository: CostRepository) {}

    createCost(cost: Cost): Promise<Cost> {
        //LOGICA DE NEGOCIO
        cost.setTotalCost(5);
        return this.costRepository.createCost(cost);  
    }

    getAll(): Promise<Cost[]> {
        return this.costRepository.getAll();  
    }

    getCost(costId: string): Promise<Cost> {
      return this.costRepository.getCost(costId);
    }

    deleteCost(id: string): Promise<Cost> {
        return this.costRepository.deleteCost(id);
    }

    updateCost(costId: string, cost: Cost): Promise<Cost>{
        return this.costRepository.updateCost(costId, cost);
    }

}




