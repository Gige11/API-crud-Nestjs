import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {clientes} from './cliente.entity';
import { Repository } from 'typeorm';
import { create } from 'domain';
import { creaclientedto } from './dto/creaclientedto.dto';
import { modificaclientedto } from './dto/modificaclientedto.dto';

@Injectable()
export class ClientesService {

    constructor(@InjectRepository(clientes) private Repositorioclientes:Repository<clientes>){} // se inyecta el repositorio de typeORM de la entidad clientes en repositorioclientes para facilitar la utilizacion
    
    async crearclientes(cliente:creaclientedto){ //metodo para crear un cliente en la BD

        const apellidoigual = await this.Repositorioclientes.findOne({ //comprueba si existe un cliente con el mismo apellido
            where:{
                Apellido: cliente.Apellido
            }
        })

        if (apellidoigual){
            return new HttpException('Existe un apellido igual en la tabla',HttpStatus.AMBIGUOUS) //si el apellido es igual, devuelve una excepcion
        }

        const nuevocliente = this.Repositorioclientes.create(cliente) //crea un cliente utilizando el DTO creaclientedto
        this.Repositorioclientes.save(nuevocliente) //lo guarda en la base de datos.

    }   

    listarclientes(){
        return this.Repositorioclientes.find()
    }

    async listaruncliente(id:number){

        const clienteencontrado = await this.Repositorioclientes.findOne({
            where: {
                idclientes:id
            }
        });

        if(!clienteencontrado){
            return new HttpException('El cliente no existe', HttpStatus.NOT_FOUND);
        }

        return clienteencontrado
        
    }

    async borrarcliente(id: number){
        const clienteencontrado = await this.Repositorioclientes.findOne({
            where: {
                idclientes:id
            }
        });
        if(!clienteencontrado){
            return this.Repositorioclientes.delete({idclientes : id});
        }
    }

    async modificarcliente(id:number,cliente:modificaclientedto){
        const clienteencontrado= await
        this.Repositorioclientes.findOne({
            where:{
                idclientes:id
            }
        })

        if(!clienteencontrado){
            return new HttpException('El cliente no existe',HttpStatus.NOT_FOUND);
        }

        const modifica = Object.assign(clienteencontrado,cliente);
        return this.Repositorioclientes.save(modifica);
    }   

}
