import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import Cost from 'src/domain/services/cost';
import { CostEntity } from 'src/infrastructure/adapters/repository/entity/cost.entity';
import { CostRepository } from 'src/domain/ports/cost.repository';
import CostMapper from './../../mapper/cost.mapper';

@Injectable()
export default class ServiceRepositoryMongo implements CostRepository{
    
    constructor(@InjectModel('Cost') private costModel: Model<CostEntity>){}

    public async getAll(): Promise<Cost[]> {
        const costs = await this.costModel.find();
        return CostMapper.toDomains(costs);
    }

    public async createCost(cost: Cost): Promise<Cost>{
        let costCreated = new this.costModel(cost);
        costCreated = await costCreated.save();
        return CostMapper.toDomain(costCreated);
    }
}