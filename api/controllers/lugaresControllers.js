const lugaresModels = require("../models/lugaresModels.js").lugaresModels;
const validacion = require("../validations/lugaresValidations.js").validacion;
const lugaresController = {};



lugaresController.titulos = (request, response) => {
  post = {
  };
  lugaresModels.titulos(post, (resultado) => {
    if (resultado.length == 0) {
      response.json({ estado: false, mensaje: "No hay titulos" });
    } else {
      response.json({ estado: true, valor: resultado });
    }
  });
};

lugaresController.cargarId = (request, response) => {
  post = {
    _id: request.params._id
  }
  if (post._id == "" || post._id == undefined || post._id == null) {
    response.json({ estado: false, mensaje: "_id no cargado" })
  } else if (post._id.length !== 24) {
    response.json({ estado: false, mensaje: "Cantidad de caracteres erroneo" })
  } else {
    lugaresModels.cargarId(post, (resultado) => {
      response.json({ estado: true, datos:resultado })
      console.log(resultado.datos.titulo)
    })
  }
}

lugaresController.cargarTodas = (request, response) => {
  lugaresModels.cargarTodas((resultado) => {
    response.json({ estado: true, datos: resultado })
  })
}

lugaresController.actualizar = (request, response) => {
  post = {
    _id: request.body._id,
    titulo: request.body.titulo,
    subtitulo: request.body.subtitulo,
    descripcion: request.body.descripcion,
    imagen: request.body.imagen,
    resumen: request.body.resumen
  }

  lugaresModels.actualizar(post, (resultado) => {
    response.json({ estado: true, mensaje: "Actualizado" })
  })
}

lugaresController.eliminar = (request, response) => {
  post = {
    _id: request.body._id
  }
  if (post._id.length !== 24) {
    response.json({ estado: false, mensaje: "Datos invalidos" })
  } else {
    lugaresModels.cargarId(post, (resultado) => {
      if (resultado.datos == null) {
        response.json({ estado: false, mensaje: "No hay usuarios con ese _id" })
      } else {
        lugaresModels.eliminar(post, (resultado) => {
          response.json({ estado: true, mensaje: "Eliminado" })
        })
      }
    })
  }
}

lugaresController.guardar = (request, response) => {
  const post = {
    titulo: request.body.titulo,
    subtitulo: request.body.subtitulo,
    descripcion: request.body.descripcion,
    imagen: request.body.imagen,
    resumen: request.body.resumen,
  };

  if(validacion.datos(post) !== true){
    response.json({estado:false, mensaje:validacion.datos(post)})
  } else {
  lugaresModels.guardar(post, (respuesta) => {
    if (respuesta.estado == false) {
      response.json({ estado: false, mensaje: "Error al guardar" });
      return false;
    } else {
      response.json({ estado: true });
    }
  });
  }
}

module.exports.lugares = lugaresController;
