import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './products/products.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  

  imports: [
     ProductsModule,

      TypeOrmModule.forRoot({

        type:'postgres',
        host : 'localhost',
        port : 5000,
        username: 'postgres',
        password : "Charon iv@12",
        database : "product-inventory-db",
        autoLoadEntities: true,
        synchronize: true,
      })
  ],
  
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
