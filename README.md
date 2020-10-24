# Laboratorio Software Avanzado
## Práctica 11


Se le ha agregado un proxy inverso a la arquitectura de la práctica anterior para que se pueda acceder a todos los servicios desde el mismo puerto 8080. 

Para ello se ha configurado un nuevo contenedor con una imagen de nginx y con sus respectivas configuraciones.


Enlace hacia el video:
https://youtu.be/9E5H0xpaqQI


Cada servido está contenido en cada una de las carpetas de este proyecto y contiene su propio Dockerfile para poder crear la imagen. 



# Desplegar arquitecturas

Para relizar la construcción y el despliegue de la arquitectura, ejecutar:

```bash
docker-compose up
```



## ESB
El ESB funciona como intermediario para la comunicación entre todos los microservicios. Está en la carpeta esb.

Para instalar las librerías necesarias:
```bash
yarn install package.json
```

Para ejecutar 

```bash
node app.js
```


## Micro servicio Cliente
Este micro servicio sirve como interfaz para el usuario. 

Para instalar las librerías necesarias:g
```bash
yarn install package.json
```

Para ejecutar 

```bash
node app.js
```


## Micro servicio Restaurante
Este microservicio representa a un restaurante que recibe y prepara el pedido del cliente. 

Para instalar las librerías necesarias:
```bash
yarn install package.json
```

Para ejecutar 

```bash
node app.js
```

## Micro servicio Repartidor
Este microservicio representa al repartidor que está encargado de transportar el pedido y a través de este servicio el cliente puede saber el estado de su pedido. 

Para instalar las librerías necesarias:
```bash
yarn install package.json
```

Para ejecutar 

```bash
node app.js
```


## Uso
Este cliente ha sido desarrollado a través de nodejs y utilizando yarm como gestor de paquetes. 
-Nodejs v8.10.0
-yarn 1.22.4

Para instalar las librerías necesarias:
```bash
yarn install package.json
```





# Autor
  Erick Tejaxún
  erickteja@gmail.com
  201213050


## Licencia
[MIT](https://choosealicense.com/licenses/mit/)
