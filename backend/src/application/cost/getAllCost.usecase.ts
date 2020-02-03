import { Injectable, Inject } from '@nestjs/common';
import Cost from 'src/domain/services/cost';
import { CostRepository } from 'src/domain/ports/cost.repository';

@Injectable()
export default class GetAllCostsUseCase {

    constructor(@Inject('CostRepository') private costRepository: CostRepository) {}

    public handler(): Promise<Cost[]>{
        return this.costRepository.getAll();
    }
    
}