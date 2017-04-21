import { Router, Request, Response, NextFunction } from 'express';

/** 
 * Router del Endpoint /test
 * 
 * @author miguelromero717
 */
export class TestRouter {

    router: Router;

    /**
     * Initialize TestRouter
     */
    constructor() {
        this.router = Router();
        this.init();
    }

    /**
     * Take each handler, and attach to one of the Express.Router's endpoints.
     */
    init() {
        this.router.get('/', this.test);
    }

    /**
     * GET /test
     * 
     * Endpoint Test
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    public test(req: Request, res: Response, next: NextFunction) {
        res.send({
            msg: "Endpoint Test"
        });
    }

}