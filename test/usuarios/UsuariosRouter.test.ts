import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import * as express from 'express';
import { App } from '../../src/app';
import * as Usuario from "../../src/model/usuarios/UsuarioSchema";
import * as _ from 'lodash';

chai.use(chaiHttp);
const expect = chai.expect;
const app: express.Application = new App().express;

describe('UsuariosRoute', () => {

    /** GET /api/usuarios */
    it('/api/usuarios should be status 200', (done) => {
        chai.request(app)
            .get('/api/usuarios')
            .then(res => {
                expect(res.status).to.eql(200);
                done();
            });
    });

    it('/api/usuarios should be json', (done) => {
        chai.request(app)
            .get('/api/usuarios')
            .then(res => {
                expect(res.type).to.eql('application/json');
                done();
            });
    });

    /** POST /api/usuarios */
    it('/api/usuarios can save', (done) => {
        chai.request(app)
            .post('/api/usuarios')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({
                nombres: 'Miguel Angel',
                apellidos: 'Romero Olaya',
                correo: 'miguelromero717@gmail.com',
                password: '123456',
                activo: true,
                usuario_creacion: 'test',
                fecha_creacion: new Date()
            })
            .then(res => {
                expect(res.status).to.eql(200);
                expect(res.type).to.eql('application/json');
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('nombres');
                expect(res.body).to.have.property('apellidos');
                expect(res.body).to.have.property('correo');
                expect(res.body).to.have.property('username');
                expect(res.body).to.have.property('password');
                expect(res.body).to.have.property('activo');
                expect(res.body).to.have.property('usuario_creacion');
                expect(res.body).to.have.property('fecha_creacion');
                expect(res.body.nombres).to.equal('Miguel Angel');
                expect(res.body.apellidos).to.equal('Romero Olaya');
                expect(res.body.correo).to.equal('miguelromero717@gmail.com');
                expect(res.body.username).to.equal('miguelromero717@gmail.com');
                expect(res.body.activo).to.equal(true);
                expect(res.body.usuario_creacion).to.equal('test');
                done();
            })
    });

    /** PUT /api/usuarios */
    it('/api/usuarios can update', (done) => {
        chai.request(app)
            .get('/api/usuarios')
            .end((err, res) => {

                let userToUpdate = _.find(res.body, { correo: "miguelromero717@gmail.com" });

                chai.request(app)
                    .put('/api/usuarios')
                    .set('content-type', 'application/x-www-form-urlencoded')
                    .send({
                        _id: userToUpdate['_id'],
                        nombres: 'Miguel Angel Update',
                        apellidos: 'Romero Olaya Update',
                        correo: 'miguelromero717@gmail.com',
                        password: '123456',
                        activo: true,
                        usuario_modificacion: 'test',
                        fecha_modificacion: new Date()
                    })
                    .end((err, res) => {
                        expect(res.status).to.eql(200);
                        expect(res.type).to.eql('application/json');
                        expect(res.body).to.be.a('object');
                        expect(res.body).to.have.property('nombres');
                        expect(res.body).to.have.property('apellidos');
                        expect(res.body).to.have.property('correo');
                        expect(res.body).to.have.property('username');
                        expect(res.body).to.have.property('password');
                        expect(res.body).to.have.property('activo');
                        expect(res.body).to.have.property('usuario_creacion');
                        expect(res.body).to.have.property('fecha_creacion');
                        expect(res.body).to.have.property('usuario_modificacion');
                        expect(res.body).to.have.property('fecha_modificacion');
                        expect(res.body.nombres).to.equal('Miguel Angel Update');
                        expect(res.body.apellidos).to.equal('Romero Olaya Update');
                        expect(res.body.correo).to.equal('miguelromero717@gmail.com');
                        expect(res.body.username).to.equal('miguelromero717@gmail.com');
                        expect(res.body.activo).to.equal(true);
                        expect(res.body.usuario_modificacion).to.equal('test');
                        done();
                    });
            });
    });

    /** GET /api/usuarios/:id */
    it('/api/usuarios can get by Id', (done) => {
        chai.request(app)
            .get('/api/usuarios')
            .end((err, res) => {

                let user = _.find(res.body, { correo: "miguelromero717@gmail.com" });

                chai.request(app)
                    .get('/api/usuarios/' + user['_id'])
                    .end((err, res) => {
                        expect(res.status).to.eql(200);
                        expect(res.body).to.be.a('object');
                        expect(res.body).to.have.property('nombres');
                        expect(res.body).to.have.property('apellidos');
                        expect(res.body).to.have.property('correo');
                        expect(res.body).to.have.property('username');
                        expect(res.body).to.have.property('password');
                        expect(res.body).to.have.property('activo');
                        expect(res.body).to.have.property('usuario_creacion');
                        expect(res.body).to.have.property('fecha_creacion');
                        expect(res.body).to.have.property('usuario_modificacion');
                        expect(res.body).to.have.property('fecha_modificacion');
                        expect(res.body.nombres).to.equal('Miguel Angel Update');
                        expect(res.body.apellidos).to.equal('Romero Olaya Update');
                        expect(res.body.correo).to.equal('miguelromero717@gmail.com');
                        expect(res.body.username).to.equal('miguelromero717@gmail.com');
                        expect(res.body.activo).to.equal(true);
                        expect(res.body.usuario_modificacion).to.equal('test');
                        done();
                    });
            });
    });

    /** DELETE /api/usuarios/:id */
    it('/api/usuarios can delete', (done) => {
        chai.request(app)
            .get('/api/usuarios')
            .end((err, res) => {

                let user = _.find(res.body, { correo: "miguelromero717@gmail.com" });

                chai.request(app)
                    .del('/api/usuarios/' + user['_id'])
                    .end((err, res) => {
                        expect(res.status).to.eql(200);
                        expect(res.body).to.be.a('object');
                        expect(res.body).to.have.property('msg').eql("Usuario Eliminado Exitosamente");
                        done();
                    });
            });
    });

})
