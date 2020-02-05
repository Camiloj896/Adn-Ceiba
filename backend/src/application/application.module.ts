import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DomainModule } from 'src/domain/domain.module';
import CostSchema from 'src/infrastructure/adapters/repository/schema/cost.schema';
import CostRepositoryMongo from 'src/infrastructure/adapters/repository/cost.repository.mongo';
import GetAllCostsUseCase from './cost/getAllCost.usecase';
import CreateCostUseCase from './cost/createCost.usecase';
import GetCostUseCase from './cost/getCost.usecase';
import UpdatedCostUseCase from './cost/updatedCost.usecase';
import DeleteCostUseCase from './cost/deleteCost.usecase';
import CostService from 'src/domain/services/cost.service';
import CostDto from 'src/domain/dto/cost.dto';

@Module({
    imports: [
      DomainModule,
      MongooseModule.forFeature([
        {
          name: 'Cost', 
          schema: CostSchema,
        },
      ]),
    ],
    providers: [
      GetAllCostsUseCase,
      GetCostUseCase,
      CreateCostUseCase,
      UpdatedCostUseCase,
      DeleteCostUseCase,
      {
        provide: 'CostService',
        useClass: CostService,
      },
      {
        provide: 'CostRepositoryMongo',
        useClass: CostRepositoryMongo,
      }
    ],
    exports: [
      GetAllCostsUseCase,
      GetCostUseCase,
      CreateCostUseCase,
      UpdatedCostUseCase,
      DeleteCostUseCase,
    ],
  })

export default class ApplicationModule {}
