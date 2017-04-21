/** 
 * Constantes
 * 
 * @author miguelromero717
 */
export class Constants {

    // Puerto Servidor
    static PORT_SERVER: number = 3030;
    // Nombre de la Base de datos
    static DB: string = "test";
    // Nombre de Usuario de la base de Datos
    static USER_DB: string = "test";
    // Password del Usuario de base de Datos
    static PASSWOR_DB: string = "P4ssw0rd*";
    // Host Base de Datos
    static HOST_DB: string = "localhost";
    // Puerto Base de Datos
    static PORT_DB: string = "27017";
    // URL Conexión Base de Datos
    static DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production'
        ? process.env.dbURI : "mongodb://" + Constants.USER_DB + ":" + Constants.PASSWOR_DB + "@" + Constants.HOST_DB + ":" + Constants.PORT_DB + "/" + Constants.DB

}