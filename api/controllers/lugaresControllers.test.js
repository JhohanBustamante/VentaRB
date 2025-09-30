const mongoose = require("mongoose")
global.config = require("../../config.js").config;
const lugaresControllers = require("./lugaresControllers.js").lugares
const lugaresModels = require("../models/lugaresModels.js").lugaresModels

describe("Pruebas sobre el archivo de controlador de /lugares/guardar", () => {
    let request, response

    beforeAll((done) => {
        // conexion a la bd

        mongoose
            .connect("mongodb://127.0.0.1:27017/" + "testBd")
            .then((respuesta) => {
                done()
                })
            .catch((error) => {
                console.log(error);
            });
    })
    beforeEach(() => {
        request = { body: {} }
        response = {
            json: jest.fn().mockReturnThis()
        }
    })

    test("Test sobre existencia", (done) => {

        request.body.titulo = "a"
        request.body.subtitulo = "a"
        request.body.descripcion = ""
        request.body.imagen = "a"
        request.body.resumen = "a"

        lugaresControllers.guardar(request, response)

        setTimeout(() => {
            expect(response.json).toHaveBeenCalledWith({
                estado: false,
                mensaje: "Ingresar valor: descripcion"
            })
            done()
        }, 14)
    })

    test("Test sobre existencia", (done) => {

        request.body.titulo = "a"
        request.body.subtitulo = "a"
        request.body.descripcion = ""
        request.body.imagen = "a"
        request.body.resumen = "a"

        lugaresControllers.guardar(request, response)

        setTimeout(() => {
            expect(response.json).toHaveBeenCalledWith({
                estado: false,
                mensaje: "Ingresar valor: descripcion"
            })
            done()
        }, 14)
    })

    test("Test sobre existencia", (done) => {

        request.body.titulo = ""
        request.body.subtitulo = "a"
        request.body.descripcion = "a"
        request.body.imagen = "a"
        request.body.resumen = "a"

        lugaresControllers.guardar(request, response)

        setTimeout(() => {
            expect(response.json).toHaveBeenCalledWith({
                estado: false,
                mensaje: "Ingresar valor: titulo"
            })
            done()
        }, 14)
    })

    test("Test sobre existencia", (done) => {

        request.body.titulo = "a"
        request.body.subtitulo = ""
        request.body.descripcion = "a"
        request.body.imagen = "a"
        request.body.resumen = "a"

        lugaresControllers.guardar(request, response)

        setTimeout(() => {
            expect(response.json).toHaveBeenCalledWith({
                estado: false,
                mensaje: "Ingresar valor: subtitulo"
            })
            done()
        }, 14)
    })

    test("Test sobre existencia", (done) => {

        request.body.titulo = "a"
        request.body.subtitulo = "a"
        request.body.descripcion = "a"
        request.body.imagen = "a"
        request.body.resumen = ""

        lugaresControllers.guardar(request, response)

        setTimeout(() => {
            expect(response.json).toHaveBeenCalledWith({
                estado: false,
                mensaje: "Ingresar valor: resumen"
            })
            done()
        }, 14)
    })

    test("Test sobre existencia", (done) => {

        request.body.titulo = "a"
        request.body.subtitulo = "a"
        request.body.descripcion = "a"
        request.body.imagen = ""
        request.body.resumen = "a"

        lugaresControllers.guardar(request, response)

        setTimeout(() => {
            expect(response.json).toHaveBeenCalledWith({
                estado: false,
                mensaje: "Ingresar valor: imagen"
            })
            done()
        }, 14)
    })

    test("Test sobre el guardado de lugares", (done) => {

        request.body.titulo = "a"
        request.body.subtitulo = "a"
        request.body.descripcion = "a"
        request.body.imagen = "a"
        request.body.resumen = "a"

        lugaresControllers.guardar(request, response)

        setTimeout(() => {
            expect(response.json).toHaveBeenCalledWith({ estado: true})
            done()
        }, 54)
    })
    
})

describe("Pruebas sobre el archivo de controlador de /lugares/cargar/:_id", () => {
    let request, response

    beforeAll((done) => {
        // conexion a la bd

        mongoose
            .connect("mongodb://127.0.0.1:27017/" + "testBd")
            .then((respuesta) => {
                done()
            })
            .catch((error) => {
                console.log(error);
            });
    })
    beforeEach(() => {
        request = { body: {}, params:{} }
        response = {
            json: jest.fn().mockReturnThis()
        }
    })

    test("Test sobre existencia", (done) => {

        request.params._id = ""
    
        lugaresControllers.cargarId(request, response)

        setTimeout(() => {
            expect(response.json).toHaveBeenCalledWith({ estado: false, mensaje: "_id no cargado" })
            done()
        }, 14)
    })

    test("Test sobre longitud de _id", (done) => {

        request.params._id = "1231313123asdasd"
    
        lugaresControllers.cargarId(request, response)

        setTimeout(() => {
            expect(response.json).toHaveBeenCalledWith({ estado: false, mensaje: "Cantidad de caracteres erroneo" })
            done()
        }, 50)
    })

    test("Test sobre cargarId, modelo", (done) => {

        lugaresModels.buscarUno((respuesta)=>{
            request.params._id = respuesta._id.toString()
        })    
        
        setTimeout(()=>{
            lugaresControllers.cargarId(request, response)
        }, 20)

        setTimeout(() => {
            expect(response.json).toHaveBeenCalledWith({ estado: true })
            done()
        }, 50)
    })

})

describe("Pruebas sobre el archivo de controlador de /lugares/cargarTodas", () => {
    let request, response

    beforeAll((done) => {
        // conexion a la bd

        mongoose
            .connect("mongodb://127.0.0.1:27017/" + "testBd")
            .then((respuesta) => {
                done()
            })
            .catch((error) => {
                console.log(error);
            });
    })
    beforeEach(() => {
        request = { body: {}, params:{} }
        response = {
            json: jest.fn().mockReturnThis()
        }
    })

    test("Test sobre cargar todas los lugares", (done) => {
    
        lugaresControllers.cargarTodas(request, response)
        
        setTimeout(() => {
            expect(response.json.mock.calls[0][0].datos.datos.length).toBe(1)
            done()
        }, 54)
    })
})

describe("Pruebas sobre el archivo de controlador de /lugares/actualizar", () => {
    let request, response

    beforeAll((done) => {
        // conexion a la bd

        mongoose
            .connect("mongodb://127.0.0.1:27017/" + "testBd")
            .then((respuesta) => {
                done()
            })
            .catch((error) => {
                console.log(error);
            });
    })
    beforeEach(() => {
        request = { body: {}, params:{} }
        response = {
            json: jest.fn().mockReturnThis()
        }
    })

    test("Test sobre actualizar", (done) => {

        request.body.titulo = "a"
        request.body.subtitulo = "a"
        request.body.descripcion = "b"
        request.body.imagen = "a"
        request.body.resumen = "a"
        
        lugaresModels.buscarUno((respuesta)=>{
            request.body._id = respuesta._id.toString()
        })   

        console.log(request.body)

        setTimeout(() => {
            lugaresControllers.actualizar(request, response)

        }, 20);
        
        setTimeout(() => {
            expect(response.json).toHaveBeenCalledWith({ estado: true, mensaje: "Actualizado" })
            done()
        }, 50)
    })
})

describe("Pruebas sobre el archivo de controlador de /lugares/eliminar", () => {
    let request, response

    beforeAll((done) => {
        // conexion a la bd
        mongoose
            .connect("mongodb://127.0.0.1:27017/" + "testBd")
            .then((respuesta) => {
                done()
            })
            .catch((error) => {
                console.log(error);
            });
    })
    beforeEach(() => {
        request = { body: {}, params:{} }
        response = {
            json: jest.fn().mockReturnThis()
        }
    })

    test("Test sobre datos invalidos al eliminar", (done) => {
    
        request.body._id = "saasasasas"
        lugaresControllers.eliminar(request, response)
         
        setTimeout(() => {
            expect(response.json).toHaveBeenCalledWith({ estado: false, mensaje: "Datos invalidos" })
            done()
        }, 50)
    })

    test("Test sobre no existencia del lugar", (done) => {
        
        lugaresModels.buscarUno((respuesta)=>{
            request.body._id = respuesta._id.toString()
            lugaresModels.eliminarTodos(()=>{})
        })    
        
        setTimeout(()=>{
            lugaresControllers.eliminar(request, response)
        }, 30)
        
        setTimeout(() => {
            expect(response.json).toHaveBeenCalledWith({ estado: false, mensaje: "No hay usuarios con ese _id" })
            done()
        }, 54)
    })

    test("Test sobre el guardado de lugares", (done) => {

        request.body.titulo = "a"
        request.body.subtitulo = "a"
        request.body.descripcion = "a"
        request.body.imagen = "a"
        request.body.resumen = "a"

        lugaresControllers.guardar(request, response)

        setTimeout(() => {
            expect(response.json).toHaveBeenCalledWith({ estado: true})
            done()
        }, 54)
    })


    test("Test sobre no existencia del lugar", (done) => {
        
        lugaresModels.buscarUno((respuesta)=>{
            request.body._id = respuesta._id.toString()
        })    
        
        setTimeout(()=>{
            lugaresControllers.eliminar(request, response)
        }, 30)
        
        setTimeout(() => {
            expect(response.json).toHaveBeenCalledWith({ estado: true, mensaje: "Eliminado" })
            done()
        }, 54)
    })
})

describe("Pruebas sobre el archivo de controlador de /lugares/titulos", () => {
    let request, response

    beforeAll((done) => {
        // conexion a la bd

        mongoose
            .connect("mongodb://127.0.0.1:27017/" + "testBd")
            .then((respuesta) => {
                done()
            })
            .catch((error) => {
                console.log(error);
            });
    })
    beforeEach(() => {
        request = { body: {}, params:{} }
        response = {
            json: jest.fn().mockReturnThis()
        }
    })

     test("Test sobre el guardado de lugares", (done) => {

        request.body.titulo = "a"
        request.body.subtitulo = "a"
        request.body.descripcion = "a"
        request.body.imagen = "a"
        request.body.resumen = "a"

        lugaresControllers.guardar(request, response)

        setTimeout(() => {
            expect(response.json).toHaveBeenCalledWith({ estado: true})
            done()
        }, 54)
    })

    test("Test sobre titulos", (done) => {
    
        lugaresControllers.titulos(request, response)
        
        setTimeout(() => {
            expect(response.json.mock.calls[0][0].valor.length).toBe(1)
            lugaresModels.eliminarTodos(()=>{})
            done()
        }, 54)
    })

    test("Test sobre sin titulos", (done) => {
    
        lugaresControllers.titulos(request, response)
        
        setTimeout(() => {
            expect(response.json).toHaveBeenCalledWith({ estado: false, mensaje: "No hay titulos" })
            done()
        }, 50)
    })
})