import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CostEntity } from 'src/infrastructure/adapters/repository/entity/cost.entity';
import { CostRepository } from 'src/domain/ports/cost.repository';
import CostMapper from './../../mapper/cost.mapper';
import Cost from 'src/domain/dto/cost.dto';

@Injectable()
export default class ServiceRepositoryMongo implements CostRepository{
    
    constructor(@InjectModel('Cost') private costModel: Model<CostEntity>){}

    public async getAll(): Promise<Cost[]> {
        const costs = await this.costModel.find();
        return CostMapper.toDomains(costs);
    }

    public async getCost(costId: string): Promise<Cost> {
        let cost = await this.costModel.findById(costId);
        return CostMapper.toDomain(cost);
    }

    public async createCost(cost: Cost): Promise<Cost> {
        let costCreated = new this.costModel(cost);
        costCreated = await costCreated.save();
        return CostMapper.toDomain(costCreated);
    }

    public async updateCost(costId: string, cost: Cost): Promise<Cost> {
        const costUpdated = await this.costModel.findByIdAndUpdate(
          costId,
          cost,
          { new: true },
        );
        return CostMapper.toDomain(costUpdated);
    }

    public async deleteCost(costId: string): Promise<Cost> {
        let costDeleted = await this.costModel.findByIdAndDelete(costId);       
        return CostMapper.toDomain(costDeleted);
    }

    // public async getTotalCost(): Promise<Cost[]>{
    //     const costs = await this.costModel.find();
    //     return CostMapper.toDomains(costs);
    // }

}