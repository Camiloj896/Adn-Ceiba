import { Injectable, Inject } from '@nestjs/common';
import Cost from 'src/domain/dto/cost.dto';
// import { CostRepository } from 'src/domain/ports/cost.repository';
import { CostService } from 'src/domain/services/cost.service';

@Injectable()
export default class GetCostUseCase {

  constructor(@Inject('CostService') private costService: CostService) {}

    public handler(costId: string): Promise<Cost>{
        return this.costService.getCost(costId);        
    }

}