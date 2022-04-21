/////////////////////////////////////////////////////////////
// Importaciones y Requeriments

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config')


/////////////////////////////////////////////////////////////
// Clases


class Server {


    ////////////////////////////////
    //Constructor

    constructor() {

        this.app = express();

        //Path de las rutas
        this.usuarioPath = '/api/usuarios';
        this.authPath = '/api/auth'

        //Middlewares
        this.middlewares();

        //Rutas
        this.routes();
    }

    ////////////////////////////////
    //Metodos


    middlewares = () => {

        //Directorio Publico
        this.app.use(express.static('src/public'));

        //CORS
        this.app.use(cors());

        //Lectura y parseo de body
        this.app.use(express.json());

        //Conectar a la Database
        this.connectionDatabase();

    }


    routes = () => {

        this.app.use(this.usuarioPath, require('../routes/user'));
        this.app.use(this.authPath, require('../routes/auth'));

    }

    connectionDatabase = async() => {

        await dbConnection();

    }


    listen = (port) => {

        this.app.listen(port, () => {
            console.log(`Server is listen the port ${port}`);
        })

    }

}


/////////////////////////////////////////////////////////////
// Exportamos

module.exports = Server