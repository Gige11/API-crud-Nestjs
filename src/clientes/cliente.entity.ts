
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'; // Se importan las etiquetas correspondientes al ORM typeORM que permite mapear nuestra tablas

@Entity({name:'clientes'}) //Indica que esta entidad corresponde a la tabla clientes en la BD

export class clientes {
  
  @PrimaryGeneratedColumn() //Indica que es una clave primaria
  idclientes: number

  @Column({ unique: true }) 
  Apellido: string

  @Column()
  Nombre: string

  @Column({ nullable: true })
  Direccion: string

  @Column({ nullable: true })
  Telefono: string

}
