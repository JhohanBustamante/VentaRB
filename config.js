var config = {};

config.bd = "BackendVenta";
config.port = 3000;
config.claveSecreta = "123abc098zyx";
config.dominio = "http://localhost:4200"
config.expiracion = 1000 * 60 * 60

config.bdUser = "adminVenta"
config.bdPass = "prueba123"
config.bdIp = "165.227.2.200"
config.bdPort = "27017"
config.produccion = true


config.emailHost = "smtp.gmail.com";

config.emailPort = 587;
config.emailUser = "jhohantma@gmail.com";
config.emailPass = "ggsubbuwfzhwlgmk";
config.negocio = "Venta de Lotes RB"

config.listaCors = [
    "http://localhost:4200",
    "http://localhost:3000",
    "https://bit.jhohanbustamante.online"
]

module.exports.config = config;