/**
 * Módulo que crea y configura el servidor HTTP
 */
const http = require('http');

/**
 * Crea un servidor HTTP que utiliza la función router para manejar las solicitudes
 * @returns {http.Server} Instancia del servidor HTTP
 */
function createServer() {
  const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    /* Aquí la lógica del enrutador */

    switch (req.url){
      case '/':
        res.statusCode = 200;
        res.end("Bienvenid@s! Gracias por tu visita.")
        break;

      case '/nosotros':
        res.statusCode = 200;
        res.end("Bienvenid@s a saber + de nosotros :)")
        break;

      case '/cursos':
        res.statusCode = 200;
        res.end("Te interesan nuestros cursos. Vení a conocer la oferta!")
        break;

      case '/contacto':
        res.statusCode = 200;
        res.end("Si querés contactarnos, hacelo a este Email: :)")
        break;

      default:
        res.statusCode = 404;
        res.end("No se ha encontrado la ruta ingresada.")
        break;
    }
    
    
  });
  
  return server;
}

module.exports = createServer;
