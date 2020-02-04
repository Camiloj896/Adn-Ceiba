import { Injectable, Inject } from '@nestjs/common';
import Cost from 'src/domain/services/cost';
import { CostRepository } from 'src/domain/ports/cost.repository';

@Injectable()
export default class CreateCostUseCase {

    constructor(@Inject('CostRepository') private costRepository: CostRepository) {}

    public handler(cost: Cost): Promise<Cost>{
        return this.costRepository.createCost(cost);
    }
    
}