import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DomainModule } from 'src/domain/domain.module';
import CostSchema from 'src/infrastructure/adapters/repository/schema/cost.schema';
import CostRepositoryMongo from 'src/infrastructure/adapters/repository/cost.repository.mongo';
import GetAllCostsUseCase from './cost/getAllCost.usecase';

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
      {
        provide: 'CostRepository',
        useClass: CostRepositoryMongo,
      },
    ],
    exports: [
      GetAllCostsUseCase,
    ],
  })

export default class ApplicationModule {}
