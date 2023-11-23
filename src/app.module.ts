import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProveedoresModule } from './proveedores/proveedores.module';

//Este es el archivo principal de la aplicacion, se declaran los modulos y sus configuraciones. 

@Module({  //se declara el modulo principal de la apicacion y su configuracion
  imports: [
    TypeOrmModule.forRoot({
      //tipo de base de datos que vamos a usar
      type: 'mysql',
      //donde esta alojada
      host: 'localhost',
      // puerto de acceso
      port: 3306,
      //usuario
      username: 'root',
      //password
      password: '',
      //nombre de la base de datos
      database: 'gestion_comercial',
      //Entidades o clases que se van a utilizar
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:true,
    }),
    ClientesModule, 
    ProveedoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


