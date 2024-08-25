# Proyecto Final Backend - Crear un E-commerce

Este es el desarrollo del backend de una aplicacion de e-commerce para poder vender productos del rubro mobiliario y decoracion. Permite dentro del proceso de compra registrar usuarios, iniciar sesion y añadir productos a un carrito de compras, gestionar el carrito y finalizar la compra al cliente.

## Índice

- [Descripción](#descripción)
- [Características](#características)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Instalación](#instalación)
- [Uso](#uso)

## Descripción

Se trata de una aplicación web desarrollada con Node.js, Express.js y MongoDB para el backend, y HTML, CSS y JavaScript para el frontend (vistas generadas en Handlebars). Utiliza Passport.js para la autenticación de usuarios y Mongoose para la interacción con la base de datos MongoDB. En la aplicación se permite a los usuarios registrarse, iniciar sesión, visualizar los productos disponibles, agregar productos al carrito, gestionar el carrito y finalizar la compra.

## Características

- Registro de usuarios
- Inicio de sesión
- Visualización de productos
- Agregar productos al carrito
- Eliminar productos del carrito
- Vaciar el carrito
- Finalizar compra

## Capturas de Pantalla

![image](https://github.com/CSOSAF/backendI/blob/main/registro.png)

![image](https://github.com/CSOSAF/backendI/blob/main/2%20-%20login.png)

![image](https://github.com/CSOSAF/backendI/blob/main/3%20-%20productos.png)

![image](https://github.com/CSOSAF/backendI/blob/main/4%20carrito%20de%20compras.png)


## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias del proyecto.
4. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias.
5. Ejecuta `npm run dev` para iniciar el servidor.
6. Abre un navegador web y accede a `http://localhost:8080/home`.

## Uso

1. Dirigite a la pagina de inicio y visualiza los productos disponibles.
2. Haz click en el botón "Agregar al carrito" para agregar un producto a tu carrito. Si ya tenes una cuenta deberás iniciar sesión; en caso de que aun no tengas una cuenta, deberás registrarte.
3. Dirigite al carrito para ver los productos agregados, eliminar productos y/o finalizar la compra.