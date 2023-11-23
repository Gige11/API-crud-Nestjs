import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'proveedores'})

export class proveedores {
  
  @PrimaryGeneratedColumn()
  idprovedor: number

  @Column({ unique: true })
  Nombre: string

  @Column({ nullable: true })
  Direccion: string

  @Column({ nullable: true })
  Telefono: string

  @Column({ nullable: true })
  Cuit: string

}
