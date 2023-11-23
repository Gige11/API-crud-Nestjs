import { ProveedoresService } from './proveedores.service';
import { Controller,Post,Body,Get, Param,ParseIntPipe,Delete,Patch } from '@nestjs/common';
import { creaproveedordto } from './dto/creaproveedordto.dto';
import { modificaproveedordto } from './dto/modificaproveedordto.dto';

@Controller('proveedores')
export class ProveedoresController {
    constructor(private servicioproveedor: ProveedoresService){}
       
        @Post()
        creaclientedto(@Body() nuevoProveedor : creaproveedordto){
            return this.servicioproveedor.creaProveedores(nuevoProveedor)
        }

        @Get()
        listarproveedores(){
            return this.servicioproveedor.listarproveedores();
        }

        @Get(':id')
        listarunproveedor(@Param('id') id:number){
            return this.servicioproveedor.listarunproveedor(id);
        }

        @Delete(':id')
        borrarproveedor(@Param('id',ParseIntPipe) id:number){
            return this.servicioproveedor.borrarproveedor(id);
        }

        @Patch(':id')
            modificaproveedor(@Param('id',ParseIntPipe) id:number,@Body() proveedor:modificaproveedordto){
            return this.servicioproveedor.modificarproveedor(id,proveedor)
        }

}
