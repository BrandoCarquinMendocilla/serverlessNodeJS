
module.exports.traducir = (x) => {
    return {
        nombre: x.name,
        periodo_de_rotacion: x.rotation_period ,
        periodo_orbital: x.orbital_period ,
        diametro: x.diameter ,
        climatizado: x.climate ,
        gravedad: x.gravity ,
        terreno: x.terrain ,
        superficie_del_agua: x.surface_water ,
        poblacion: x.population ,
        residentes: x.residents ,
        películas: x.films ,
        fechaCreacion: x.created ,
        fechaActualizacion: x.edited ,
        url: x.url
    }
}  
