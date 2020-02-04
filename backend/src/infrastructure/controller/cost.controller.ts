import { Controller, Get, Post, Res, Body, HttpStatus } from '@nestjs/common';
import GetAllCostsUseCase from 'src/application/cost/getAllCost.usecase';
import CreateCostUseCase from 'src/application/cost/createCost.use.case';
import Cost from 'src/domain/services/cost';

@Controller('cost/')
export class CostController {
    
    constructor(private getAllCostsUseCase: GetAllCostsUseCase, private createCostUseCase: CreateCostUseCase){}

    @Get()
    public async getServices(@Res() request ): Promise<any>{
        const costs = await this.getAllCostsUseCase.handler();
        return request.status(HttpStatus.OK).json(costs);
    }

    @Post()
    public async createCost(@Res() request, @Body() cost: Cost): Promise<any>{
        const costCreated = await this.createCostUseCase.handler(cost);
        return request.status(HttpStatus.CREATED).json(costCreated);
    }
}
