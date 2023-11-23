import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { proveedores } from './proveedor.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { creaproveedordto } from './dto/creaproveedordto.dto';
import { modificaproveedordto } from './dto/modificaproveedordto.dto';

@Injectable()
export class ProveedoresService {

    constructor(@InjectRepository(proveedores) private RepositorioProveedores:Repository<proveedores>){}

    async creaProveedores(proveedor:creaproveedordto){
        const nombreigual = await this.RepositorioProveedores.findOne({
            where:{
                Nombre: proveedor.Nombre
            }
        })
        if(nombreigual){
            return new HttpException('Existe un nombre igual en la tabla',HttpStatus.AMBIGUOUS)
        }

        const nuevoproveedor = this.RepositorioProveedores.create(proveedor)
        this.RepositorioProveedores.save(nuevoproveedor)
    }

    listarproveedores(){
        return this.RepositorioProveedores.find()
    }

    async listarunproveedor(id:number){

        const proveedorencontrado = await this.RepositorioProveedores.findOne({
            where: {
                idprovedor:id
            }
        })

        if(!proveedorencontrado){
            return new HttpException('el proveedor no existe',HttpStatus.NOT_FOUND);
        }

        return proveedorencontrado
    }

    async borrarproveedor(id:number){
        const proveedorencontrado = await this.RepositorioProveedores.findOne({
            where:{
                idprovedor:id
            }
        })
        if(!proveedorencontrado){
            return this.RepositorioProveedores.delete({idprovedor:id})
        }
        
    }

    async modificarproveedor(id:number,proveedor:modificaproveedordto){
        const proveedorencontrado = await this.RepositorioProveedores.findOne({
            where:{
                idprovedor:id
            }
        });

        
        if(!proveedorencontrado){
            return new HttpException('El proveedor no existe',HttpStatus.NOT_FOUND);            
        }

        const modifica = Object.assign(proveedorencontrado,proveedor);
        return this.RepositorioProveedores.save(modifica);
    }
}
