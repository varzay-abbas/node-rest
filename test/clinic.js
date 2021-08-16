/**
 *Test Script for unit testing clinic data
 *
 */

let expect  = require('chai').expect;
let request = require('request');
const API = 'http://localhost:3001';

/**
 *Test Cases
 *
 */
describe('Status and content', function() {
    describe ('Main page', function() {
        it('Main page content', function(done) {
            request( API , function(error, response, body) {
                expect(body).to.equal('Hello Node Rest API Test');
                done();
            });
        });


        it('Main page status', function(done) {
            request(API, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    });  

    describe ('Clinic API page', function() {
        it('API page Status', function(done) {
                request(API+"/clinic/all", function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).length.not.equal(0);
                done();
            });
                      
        });
    }); 

    describe ('Clinic Search API page', function() {
        it('API page Status', function(done) {
                request(API+"/clinic/search?ClinicName=Good Health Home", function(error, response, body) {
                expect(body).length.not.equal(0);
                expect(response.statusCode).to.equal(200);
                done();
            });
                      
        });
    }); 

    describe ('Other page', function() {
        it('other page content', function(done) {
            request(API+"/other", function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    }); 
});
