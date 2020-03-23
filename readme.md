# Pasos para utilizar el API

* Instalar las dependencias
  * Ejecutar el comando `npm install` para instalar las dependencias.

* Crear un archivo con el nombre .env
  * Crear y rellenar la variable de entorno API_KEY
  * Ejemplo: API_KEY="MI API KEY" sin comillas dobles

* Para las imagenes
  * Crear la carpeta "images" y colocar las imagenes que se deseen analizar
  * En el archivo main.js, en la variable "images_file" colocar la ruta y nombre de la imagen.
  * Ejemplo: `fs.createReadStream("./images/ruta.jpg");`
* Ejecutar el programa 
  * Ejecutar el comando `node main.js`
