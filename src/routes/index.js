'use strict';
const axios = require('axios');
const map = require('../../mapper/interface/Planets')
const cn = require('../../common/connectionDB')

module.exports.hello = async (event) => {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    statusCode: 200,
    body: "Bienvenido Api Rest Brando Javier Carquin Mendocilla - Serverless",
  }
};

module.exports.detallePlaneta = async ( event ) => {
  const body = JSON.parse(event.body)
  if (event.body == null || event.body == undefined || body.id == null || body.id == undefined || body.id == 0 || body.id == "" || isNaN(body.id)) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        status: false,
        body: {
          codigoError: 400,
          mesajeEror: "Debe enviar el campo id correctamente"
        }
      }),
    }
  }
  try {
    let res = await axios.get(`https://swapi.py4e.com/api/planets/${body.id}/`)
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: true,
        body:{
          data: map.traducir(res.data)
        } 
      }),
    }
  } catch (error) {
    return {
      codigoError: 400,
      status: false,
      mesajeEror: JSON.stringify(error)
    }
  }
  
}

module.exports.mostrarPersonaje = async ( event, context ) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const sql = `CALL SP_GETPERSONAJES()`;
  const [rows, fields] = await cn.conexionDB.promise().query(sql);
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    statusCode: 200,
    body: JSON.stringify({
      status: true,
      body:{
        data: rows
      }
    })
  }
}

module.exports.registrarPersonaje = async ( event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const body = JSON.parse(event.body)
  if (event.body == null || event.body == undefined || 
    body.name == null || body.name == undefined || body.name == 0 || 
    body.name == "" ||
    body.altura == null || body.altura == undefined || body.altura == 0 || 
    body.altura == "" ||
    body.peso == null || body.peso == undefined || body.peso == 0 || 
    body.peso == "" ) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        status: false,
        body: {
          codigoError: 400,
          mesajeEror: "Campos obligatorios a enviar: name, altura, peso"
        }
      }),
    }
  }

  const sql = `CALL SP_CREATEDATA("${body.name}","${body.altura}","${body.peso}")`;
  const [rows, fields] = await cn.conexionDB.promise().query(sql);
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    statusCode: 200,
    body: JSON.stringify({
      status: true,
      body:{
        data: "Registro Creado exitosamente"
      }
    })
  }
}