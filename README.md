# Pre-Entrega Node.js - Gestión de Productos

## Descripción

Este proyecto corresponde a la pre-entrega de Node.js. Se trata de una aplicación de consola que consume una API REST para gestionar productos utilizando peticiones HTTP.

La aplicación permite ejecutar diferentes operaciones desde la terminal mediante el uso de argumentos (`process.argv`).

## Tecnologías utilizadas

- Node.js
- JavaScript (ES Modules)
- Fetch API
- npm

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/nazarenarusin96/Entrega-Node.git
```

Instalar dependencias:

```bash
npm install
```

## Ejecución

Consultar todos los productos:

```bash
npm run start GET products
```

Consultar un producto por ID:

```bash
npm run start GET products/15
```

Crear un producto:

```bash
npm run start POST products T-Shirt-Rex 300 remeras
```

Eliminar un producto:

```bash
npm run start DELETE products/7
```

## Estructura del proyecto

```
.
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Funcionalidades

- Obtener todos los productos.
- Obtener un producto por ID.
- Crear un nuevo producto.
- Eliminar un producto.
- Manejo básico de errores.
- Interpretación de comandos mediante `process.argv`.

## Conceptos aplicados

- ES Modules
- Async / Await
- Fetch API
- Promesas
- Destructuring
- Rest Operator
- Métodos de Arrays
- Métodos de Strings
- Manejo de errores con `try...catch`

## Autor

Nazarena Rusin
