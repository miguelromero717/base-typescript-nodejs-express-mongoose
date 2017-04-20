import * as express from 'express';
import { DBConfig } from '../config/DBConfig';

/** 
 * Clase de Configuración del Router de la API
 * 
 * @author miguelromero717
 */
export class ApiRouter {

    public express: express.Application;

    constructor(express: express.Application) {
        this.express = express;
        new DBConfig();
        this.configRoutes();
    }

    /**
     * Configuración de los Routes
     */
    public configRoutes() {
        this.configHeadersCORS();
    }

    /**
     * Configura los Headers de CORS
     * 
     * @author miguelromero717
     */
    private configHeadersCORS() {
        this.express.all('/*', function (req, res, next) {
            // CORS headers
            res.header("Access-Control-Allow-Origin", "*"); // Configurar el dominio requerido
            res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
            // Set custom headers for CORS
            res.header('Access-Control-Allow-Headers', 'Content-type,Accept,access,X-Key');
            if (req.method == 'OPTIONS') {
                res.status(200).end();
            } else {
                next();
            }
        });
    }

}