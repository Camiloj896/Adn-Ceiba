import { Injectable, Inject } from '@nestjs/common';
import Cost from 'src/domain/dto/cost.dto';
import { CostRepository } from 'src/domain/ports/cost.repository';
import { CostService } from 'src/domain/services/cost.service';

@Injectable()
export default class UpdatedCostUseCase {

    constructor(@Inject('CostService') private costService: CostService) {}

    public handler(costId: string, cost: Cost): Promise<Cost>{
        return this.costService.updateCost(costId, cost);
    }
    
}