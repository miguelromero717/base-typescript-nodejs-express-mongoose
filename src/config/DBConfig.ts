import Mongoose = require("mongoose");
import Constantes = require("./Constantes");

/** 
 * Clase de Conexión a la Base de datos
 * 
 * @author miguelromero717
 */ 
export class DBConfig {

    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;

    /**
     * Constructor de la Clase
     */
    constructor() {
        DBConfig.connect();
    }

    /**
     * Establece la Conexión con Mongoose a la Base de Datos
     */
    static connect(): Mongoose.Connection {

        if (this.mongooseInstance) return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to mongodb.");
        });

        Mongoose.Promise = global.Promise;
        this.mongooseInstance = Mongoose.connect(Constantes.Constants.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }

}