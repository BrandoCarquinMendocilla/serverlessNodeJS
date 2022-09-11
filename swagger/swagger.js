// this file was generated by serverless-auto-swagger
module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "SWAGGER SERVERLESS NODEJS",
    "version": "1",
    "description": "Este es un servidor referente a Star Wars, basado en la especificación OpenAPI 2.0.Puede obtener más información sobre Swagger en https://swagger.io. Todos estos servicios funcionan correctamente, que esperas para probarlo. Por cierto, te deje algunos ejemplos en la seccion de models, espero te diviertas!\n\n<b>Datos personales:</b>\n- Autor:Brando Javier Carquin Mendocilla\n- Area: Developer FullStack\n- Correo: carquinbrando2018@gmail.com\n- Celular: +51 967 395 241\n- Linkedin: https://www.linkedin.com/in/brando-javier-carquin-mendocilla-b9a277240/"
  },
  "schemes": [
    "http"
  ],
  "paths": {
    "/dev/hello": {
      "get": {
        "summary": "hello",
        "description": "",
        "operationId": "hello",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "tags": [
          {
            "name": "Bienvenido  ",
            "description": " Developer FullStack Brando Carquin"
          }
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/dev/buscar/planetas": {
      "post": {
        "summary": "buscarPlanetas",
        "description": "",
        "operationId": "buscarPlanetas",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "tags": [
          {
            "name": "Busca tu planeta:  ",
            "description": " Ingresa el codigo de tu planeta"
          }
        ],
        "parameters": [
          {
            "name": "id",
            "in": "body",
            "description": "¿En que planeta vives?",
            "schema": {
              "$ref": "#/definitions/buscarPlaneta"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/dev/mostrar/personajes": {
      "get": {
        "summary": "mostrarPersonaje",
        "description": "",
        "operationId": "mostrarPersonaje",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "tags": [
          {
            "name": "Obtener listado de Personajes:  "
          }
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/dev/registrar/personaje": {
      "post": {
        "summary": "registrarPersonaje",
        "description": "",
        "operationId": "registrarPersonaje",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "tags": [
          {
            "name": "Registra tu personaje:  ",
            "description": " Ingresa solo su nombre, peso y altura"
          }
        ],
        "parameters": [{
          "name": "name,altura,peso",
            "in": "body",
            "description": "Crea tu personaje favorito",
            "schema": {
              "$ref": "#/definitions/registarPersonaje"
            }
        }],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    }
  },
  "definitions": {
    "buscarPlaneta": {
      "required": ["id"],
      "properties": {
        "id": {
          "type": "integer",
          "uniqueItems": true,
          "example": 1
        }
      }
    },
    "registarPersonaje": {
      "required": ["name","altura","peso"],
      "properties": {
        "name": {
          "type": "string",
          "uniqueItems": true,
          "example": "Juan Perez"
        },
        "altura": {
          "type": "string",
          "uniqueItems": true,
          "example": "1.65"
        },
        "peso": {
          "type": "string",
          "uniqueItems": true,
          "example": "68"
        }
      }
    }
  }
};