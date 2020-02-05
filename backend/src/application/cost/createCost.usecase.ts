import { Injectable, Inject } from '@nestjs/common';
import Cost from 'src/domain/dto/cost.dto';
import { CostService } from 'src/domain/services/cost.service';

@Injectable()
export default class CreateCostUseCase {

    constructor(@Inject('CostService') private costService: CostService) {}

    public handler(cost: Cost): Promise<Cost>{
        return this.costService.createCost(cost);        
    }
    
}