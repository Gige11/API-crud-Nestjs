import { Module } from '@nestjs/common';
import { ProveedoresController } from './proveedores.controller';
import { ProveedoresService } from './proveedores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { proveedores } from './proveedor.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([proveedores]),
  ],
  controllers: [ProveedoresController],
  providers: [ProveedoresService]
})
export class ProveedoresModule {}
