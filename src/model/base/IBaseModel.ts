/** 
 * Interface del Schema Modelo Base
 * 
 * @author miguelromero717
 */
import * as mongoose from "mongoose";

export interface IBaseModel extends IBase, mongoose.Document { };