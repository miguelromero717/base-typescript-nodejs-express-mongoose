/** 
 * Definición Schema Base
 * 
 * @author miguelromero717 
 */
import * as mongoose from "mongoose";
import * as util from "util";
import { IBaseModel } from './IBaseModel';

var Schema = mongoose.Schema;

// Definición Schema Base
function AbstractBaseModelSchema() {

    Schema.apply(this, arguments);

    this.add({
        usuario_creacion: {
            type: String
        },
        fecha_creacion: {
            type: Date
        },
        usuario_modificacion: {
            type: String
        },
        fecha_modificacion: {
            type: Date
        }
    });

}

util.inherits(AbstractBaseModelSchema, Schema);

// Export del Schema
var BaseModelSchema = new AbstractBaseModelSchema();
export = BaseModelSchema;