/** 
 * Interface del Model para el Schema Usuario
 * 
 * @author miguelromero717
 */
import * as mongoose from "mongoose";

export interface IUsuarioModel extends IUsuario, mongoose.Document { };