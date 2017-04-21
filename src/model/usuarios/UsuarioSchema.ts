/** 
 * Definición del Schema Usuario
 * 
 * @author miguelromero717
 */
import * as mongoose from "mongoose";
import { IUsuarioModel } from './IUsuarioModel';
import * as BaseModelSchema from '../base/BaseSchema';

// Definición del Schema
var usuarioSchema = BaseModelSchema;
usuarioSchema.add({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    username: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    }
});

// Export del Schema
var Usuario = mongoose.model<IUsuarioModel>("Usuario", usuarioSchema);
export = Usuario;