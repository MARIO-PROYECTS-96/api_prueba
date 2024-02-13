Instrucciones para Ejecutar el Proyecto
Siga los siguientes pasos para ejecutar el proyecto en su máquina local:

Clonar el Repositorio:

Clone el repositorio desde GitHub a su escritorio o directorio de preferencia utilizando el siguiente comando en la terminal:
bash
Copy code
git clone https://github.com/tu_usuario/tu_repositorio.git
Abrir el Proyecto:

Abra el proyecto clonado utilizando su editor de código preferido, como Visual Studio Code, Atom, o Sublime Text.
Importar la Base de Datos:

Importe la base de datos en su motor de base de datos MySQL. La base de datos se encuentra en la carpeta BD en la raíz del proyecto.
Configurar la Conexión:

Edite el archivo dbConfig.js ubicado en la carpeta config en la raíz del proyecto. Modifique los siguientes parámetros con sus datos locales o variables de entorno:
javascript
Copy code
module.exports = {
    host: 'localhost',
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'tu_base_de_datos'
};
Configurar la Autenticación:

Edite el archivo auth.js ubicado en la carpeta config. Reemplace la línea de la clave secreta con una clave segura o una variable de entorno:
javascript
Copy code
const secretKey = 'tu_clave_secreta'; // Reemplace esta línea con una clave segura o variable de entorno
Ejecutar el Proyecto:

En la terminal, dentro del directorio raíz del proyecto, ejecute los siguientes comandos:
sql
Copy code
npm install
npm start
Estos comandos instalarán todas las dependencias necesarias y ejecutarán el proyecto. Una vez completado, podrá acceder y probar la API en su navegador o cliente de API preferido.
