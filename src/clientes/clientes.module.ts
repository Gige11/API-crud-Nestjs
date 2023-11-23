import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { clientes } from './cliente.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([clientes]), //se registra la entidad clientes para que este disponible para el controlador y servicio
  ],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}
