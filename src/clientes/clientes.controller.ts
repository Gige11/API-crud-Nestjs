import { Controller,Post,Body,Get, Param,ParseIntPipe,Delete,Patch } from '@nestjs/common';
import { creaclientedto } from './dto/creaclientedto.dto';
import { clientes } from './cliente.entity';
import { ClientesService } from './clientes.service';
import { modificaclientedto } from './dto/modificaclientedto.dto';

@Controller('clientes')
export class ClientesController {

constructor(private serviciocliente: ClientesService){
}

  @Post()
    crearCliente(@Body() nuevoCliente:creaclientedto){
      return this.serviciocliente.crearclientes(nuevoCliente)
    }

  @Get()
  listarClientes(){
    return this.serviciocliente.listarclientes();
  }

  @Get(':id')
    listaruncliente(@Param('id') id:number){
      return this.serviciocliente.listaruncliente(id);
    } 

  @Delete(':id')
    borrarcliente(@Param('id',ParseIntPipe) id:number){
      return this.serviciocliente.borrarcliente(id);
    }

  @Patch(':id')
    modificacliente(@Param('id',ParseIntPipe) id:number,@Body() cliente:modificaclientedto){
      return this.serviciocliente.modificarcliente(id,cliente)
    }

}


