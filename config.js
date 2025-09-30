var config = {};

config.bd = "proyecto";
config.port = 3000;
config.claveSecreta = "123abc098zyx";
config.dominio = "http://localhost:4200"
config.expiracion = 1000 * 60 * 60

config.bdUser = " "
config.bdPass = " "
config.bdIp = "127.0.0.1"
config.bdPort = "27017"
config.produccion = false


config.emailHost = "smtp.gmail.com";

config.emailPort = 587;
config.emailUser = "jhohantma@gmail.com";
config.emailPass = "ggsubbuwfzhwlgmk";
config.negocio = "Venta de Lotes RB"

config.listaCors = [
    "http://localhost:4200",
    "http://localhost:3000"
]

module.exports.config = config;