import * as mocha from 'mocha';
import * as chai from 'chai';
import * as express from 'express';
import chaiHttp = require('chai-http');
import { App } from '../src/app';

chai.use(chaiHttp);
const expect = chai.expect;
const app: express.Application = new App().express;

describe('TestRoute', () => {

    /** GET /test */
    it('/test is up', (done) => {
        chai.request(app)
            .get('/test')
            .then(res => {
                expect(res.status).to.eql(200);
                expect(res.type).to.eql('application/json');
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('msg');
                done();
            })
    });

});