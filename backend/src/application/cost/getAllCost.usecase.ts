import { Injectable, Inject } from '@nestjs/common';
import Cost from 'src/domain/dto/cost.dto';
import { CostService } from 'src/domain/services/cost.service';

@Injectable()
export default class GetAllCostsUseCase {

    constructor(@Inject('CostService') private costService: CostService) {}

    public handler(): Promise<Cost[]>{
        return this.costService.getAll();        
    }
    
}