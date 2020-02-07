import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus } from '@nestjs/common';
import { INestApplication } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as request from 'supertest';
import InfrastructureModule from './../src/infrastructure/infrastructure.module';
import { CostController } from './../src/infrastructure/controller/cost.controller';
import CostSchema from './../src/infrastructure/adapters/repository/schema/cost.schema';

describe('--- Cost Controller (e2e) ---', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        InfrastructureModule,
        MongooseModule.forRoot('mongodb://localhost/adn'),
        MongooseModule.forFeature([{ name: 'Cost', schema: CostSchema }])
      ],
      controllers: [CostController]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/Cost (GET)', () => {
    return request(app.getHttpServer())
      .get('cost/')
      .expect(200)
  });
});

  
