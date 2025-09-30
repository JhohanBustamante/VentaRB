const lugaresModels = {};
const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const lugareschema = new Schema({
  titulo: String,
  subtitulo: String,
  descripcion: String,
  lista: Object,
  imagen: String,
  resumen: String
});
const modelo = mongoose.model("lugares", lugareschema);
lugaresModels.guardar = (post, callback) => {
  const instancia = new modelo();
  instancia.titulo = post.titulo;
  instancia.subtitulo = post.subtitulo;
  instancia.descripcion = post.descripcion;
  instancia.lista = post.lista
  instancia.imagen = post.imagen
  instancia.resumen = post.resumen
  instancia
    .save()
    .then((respuesta) => {
      return callback({ estado: true, respuesta:respuesta });
    })
    .catch((error) => {
      console.log(error);
      return callback({ estado: false });
    });
};
lugaresModels.eliminar = (post, callback)=>{
  modelo.findByIdAndDelete(post._id).then((resultado)=>{
    return callback({estado:true})
  }).catch((error)=>{
    console.log(error)
    return callback({estado:false})
  })
}
lugaresModels.cargarId = (post, callback) => {
  modelo.findById(post._id, { __v: 0 }).then((resultado) => {
    return callback({ datos: resultado })
  })
}
lugaresModels.cargarTodas = (callback) => {
  modelo.find( {}, { __v: 0}).then((resultado) => {
    return callback({ datos: resultado })
  })
}
lugaresModels.actualizar = (post, callback) => {
  console.log(post)
  modelo.findOneAndUpdate({ _id: post._id },
    { titulo: post.titulo, subtitulo: post.subtitulo, descripcion: post.descripcion, imagen: post.imagen, resumen: post.resumen })
    .then((resultado) => {
    return callback({ estado:true })
  }).catch((error)=>{
    console.log(error)
    return callback({estado:false})
  })
}
lugaresModels.titulos = (post, callback) => {
  modelo
    .find({}, { titulo: 1, _id: 1 })
    .then((respuesta) => {
      console.log("------->")
      console.log(respuesta)
      return callback(respuesta);
    });
}
lugaresModels.eliminarTodos = (callback) => {
  modelo.deleteMany({}).then((respuesta)=>{
    return callback(respuesta)
  })
}
lugaresModels.buscarUno = (callback)=>{
  modelo.findOne({}).then((respuesta)=>{
    return callback(respuesta)
  })
}
lugaresModels.modelo = modelo;
module.exports.lugaresModels = lugaresModels;
