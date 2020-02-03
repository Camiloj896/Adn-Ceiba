import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import GetAllCostsUseCase from 'src/application/cost/getAllCost.usecase';

@Controller('cost/')
export class CostController {
    
    constructor(private getAllCostsUseCase: GetAllCostsUseCase){}

    @Get()
    public async getServices(@Res() request ): Promise<any>{
        const costs = await this.getAllCostsUseCase.handler();
        return request.status(HttpStatus.OK).json(costs);
    }
}
