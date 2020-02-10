 
import { Module, DynamicModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';
import ApplicationModule from './application/application.module';
import InfrastructureModule from './infrastructure/infrastructure.module';

@Module({
  imports: [DomainModule, ApplicationModule, InfrastructureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// @Module({})
// export default class AppModule {
//   static foorRoot(setting: any): DynamicModule {
//     return {
//       module: AppModule,
//       imports: [
//         DomainModule,
//         ApplicationModule,
//         InfrastructureModule.foorRoot(setting),
//       ],
//     };
//   }
// }
