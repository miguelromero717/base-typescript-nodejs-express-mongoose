/** 
 * Configuración del Router del Schema Usuario
 * 
 * @author miguelromero717
 */
import { Router, Request, Response, NextFunction } from 'express';

import * as Usuario from "../../model/usuarios/UsuarioSchema";

export class UsuariosRouter {

    router: Router;

    /**
     * Initialize the UsuariosRouter
     */
    constructor() {
        this.router = Router();
        this.init();
    }

    /**
     * Take each handler, and attach to one of the Express.Router's endpoints.
     */
    init() {
        this.router.get('/', this.getAllUsuarios);
        this.router.post('/', this.saveUsuario);
        this.router.put('/', this.updateUsuario);
        this.router.delete('/:id', this.deleteUsuario);
        this.router.get('/:id', this.getUsuarioById);
    }

    /**
     * GET /api/admin/usuarios
     * 
     * Retorna un listado de Usuarios registrados en el Sistema
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    public getAllUsuarios(req: Request, res: Response, next: NextFunction) {
        Usuario.find({}).then(
            usuario => {
                res.send(usuario);
            },
            error => {
                res.send({ error: error });
            }
        );
    }

    /**
     * POST /api/admin/usuarios
     * 
     * Registra un Usuario
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    public saveUsuario(req: Request, res: Response, next: NextFunction) {
        let usuarioSchema = new Usuario(
            {
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                correo: req.body.correo,
                username: req.body.correo,
                password: req.body.password,
                activo: req.body.activo,
                usuario_creacion: req.body.usuario_creacion,
                fecha_creacion: new Date()
            }
        );
        usuarioSchema.save({ new: true }).then(
            usuario => {
                res.send(usuario);
            },
            error => {
                res.send(error);
            }
        );
    }

    /**
     * PUT /api/admin/usuarios
     * 
     * Actualiza un Usuario
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    public updateUsuario(req: Request, res: Response, next: NextFunction) {
        let query = { '_id': req.body._id };
        let updates = {
            $set: {
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                correo: req.body.correo,
                username: req.body.correo,
                activo: req.body.activo,
                usuario_modificacion: req.body.usuario_modificacion,
                fecha_modificacion: new Date()
            }
        };
        Usuario.findOneAndUpdate(query, updates, { new: true }).then(
            usuario => {
                res.send(usuario);
            },
            error => {
                res.send(error);
            }
        );
    }

    /**
     * DELETE /api/admin/usuarios/:id
     * 
     * Elimina un Usuario
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    public deleteUsuario(req: Request, res: Response, next: NextFunction) {
        Usuario.remove({ _id: req.params.id }).then(
            removed => {
                res.send({ msg: "Usuario Eliminado Exitosamente" });
            },
            error => {
                res.send(error);
            }
        );
    }

    /**
     * GET /api/admin/usuarios/:id
     * 
     * Obtiene un Usuario por su Id
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    public getUsuarioById(req: Request, res: Response, next: NextFunction) {
        Usuario.findOne({ _id: req.params.id }).then(
            usuario => {
                res.send(usuario);
            },
            error => {
                res.send(error);
            }
        );
    }

}