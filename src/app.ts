import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

/** 
 * Clase que configura Express + NodeJS
 * 
 * @author Magdalen S.A.S. 
 * @author Miguel Angel Romero 
 */ 
export class App {

    public express: express.Application;

    constructor(){
        this.express = express();
    }

    /**
     * Configuración del Middleware de Express
     */
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

}