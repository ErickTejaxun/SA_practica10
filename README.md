# Laboratorio Software Avanzado
## Práctica 10

Este repositorio contiene el proyecto inicial que se ha estado desarrollando en las prácticas anteriores
agregando técnicas de DevOps para CI/CD y agregando buenas prácticas y estándares de desarrollo.

Esto se ha desplepegado utilizando docker compose. 

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
