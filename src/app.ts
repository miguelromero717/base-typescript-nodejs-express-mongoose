import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import { ApiRouter } from './routers/ApiRouter';

/** 
 * Clase que configura Express + NodeJS
 * 
 * @author miguelromero717
 */ 
export class App {

    public express: express.Application;
    apiRouter: ApiRouter;

    constructor(){
        this.express = express();
        this.middleware();
        this.routes();        
    }

    /**
     * Configuración del Middleware de Express
     */
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void{
        this.apiRouter = new ApiRouter(this.express);        
    }

}