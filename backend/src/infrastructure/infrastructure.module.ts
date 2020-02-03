import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CostController } from './controller/cost.controller';
import ApplicationModule from '../application/application.module';
import CostSchema from './adapters/repository/schema/cost.schema';

@Module({
  imports: [
    ApplicationModule,
    MongooseModule.forRoot('mongodb://localhost/adn'),
    MongooseModule.forFeature([{ name: 'Cost', schema: CostSchema }])
  ],
  controllers: [CostController]
})
export default class InfrastructureModule {}


