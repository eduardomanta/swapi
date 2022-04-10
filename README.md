# Reto Técnico SWAPI


-   Crear una API en Node.js con el framework Serverless para un despliegue en AWS.
-   Adaptar y transformar los modelos de la API de prueba. Se tienen que mapear todos los nombres de atributos modelos del inglés al español (Ej: name -> nombre).
-   Integrar la API de prueba StarWars API (líneas abajo está el link) se deben integrar uno o más endpoints.
-   Crear un modelo de su elección mediante el uso de un endpoint POST, la data se tendrá que almacenar dentro de una base de datos.
-   Crear un endpoint GET que muestre la data almacenada.


# Instalación

- Clonar el repositorio   https://github.com/eduardomanta/swapi.git
- Crear el archivo  "env/params-local.yml" y  "env/params-dev.yml" para ejecutar la aplicación en entorno local y en modo dev (serverless deploy)
- Crear el archivo .env para ejecutar las pruebas unitarias

# Comandos
- npm run dev: ejecuta la aplicación en entorno local
- npm run test: ejecuta las pruebas unitarias (considerar archivo .env)
- serverless config credentials  --provider aws --key  <key> --secret <secret> --overwrite: configuracion de entorno para realizar el despliegue
- serverless deploy: desplegar la aplicación en AWS

# Rutas
  - GET - https://opmijdk3rj.execute-api.us-east-1.amazonaws.com/dev/ : Hola mundo
  -  GET - https://opmijdk3rj.execute-api.us-east-1.amazonaws.com/dev/open-api.json : Documentacion open api en formato JSON (pegar en https://editor.swagger.io/)
   - GET - https://opmijdk3rj.execute-api.us-east-1.amazonaws.com/dev/open-api.yml : Documentacion open API en formato YAML  (pegar en https://editor.swagger.io/)
   - GET - https://opmijdk3rj.execute-api.us-east-1.amazonaws.com/dev/swapi/vehiculos : obtener lista de vehiculos de star wars
   - POST - https://opmijdk3rj.execute-api.us-east-1.amazonaws.com/dev/swapi/vehiculos : guardar un vehiculo nuevo

# Copiar para hacer prueba POST

{
  "clase": "wheeled",
  "capacidadPasajeros": "30",
  "enlacePilotos": [
    
  ],
  "nombre": "Sand Crawler",
  "fechaCreacion": "2014-12-10T15:36:25.724000Z",
  "enlace": "https://swapi.py4e.com/api/vehicles/4/",
  "capacidadTransporteKg": "50000",
  "fechaEdicion": "2014-12-20T21:30:21.661000Z",
  "tiempoDuracionAlimentos": "2 months",
  "maximaVelocidadAtm": "30",
  "numeroPersonal": "46",
  "longitudMtr": "36.8 ",
  "enlacePeliculasDondeAparecio": [
    "https://swapi.py4e.com/api/films/1/",
    "https://swapi.py4e.com/api/films/5/"
  ],
  "nombreOficial": "Digger Crawler",
  "costoCreditosGalacticos": "150000",
  "fabricante": "Corellia Mining Corporation"
}



