
var config = {};

config.bd = "BackendVentaRB";
config.port = 3000;
config.claveSecreta = "123abc098zyx";
config.dominio = "https://ventarb.kolisevm.online"
config.expiracion = 1000 * 60 * 60

config.bdUser = "adminVenta"
config.bdPass = "prueba123"
config.bdIp = "64.227.58.82"
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
    "https://ventarb.kolisevm.online",
"http://ventarb.kolisevm.online",
"http://64.227.58.82:3000",
"https://64.227.58.82:3000"
]

module.exports.config = config;
