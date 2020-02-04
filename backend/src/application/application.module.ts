import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DomainModule } from 'src/domain/domain.module';
import CostSchema from 'src/infrastructure/adapters/repository/schema/cost.schema';
import CostRepositoryMongo from 'src/infrastructure/adapters/repository/cost.repository.mongo';
import GetAllCostsUseCase from './cost/getAllCost.usecase';
import CreateCostUseCase from './cost/createCost.use.case'

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
      CreateCostUseCase,
      {
        provide: 'CostRepository',
        useClass: CostRepositoryMongo,
      },
    ],
    exports: [
      GetAllCostsUseCase,
      CreateCostUseCase,
    ],
  })

export default class ApplicationModule {}
