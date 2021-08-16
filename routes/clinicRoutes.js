/**
 * Define Routes 
 *
 */
'use strict';

const Router = require('express');
const clinicRepo = require('../repo/clinicRepository');

/**
 * Define Routes Names 
 *
 */
const getClinicRoutes = (app) => {
    const router = new Router();

    router
        .get('/get/:id', (req, res) => {
            const id = parseInt(req.params.id);
            const result = clinicRepo.getById(id);
            res.send(result);
        })
        .get('/all', (req, res) => {
            const result = clinicRepo.getAll();
            res.send(result);
        })
        .get('/search/', (req, res) => {
           
            const ClinicName = req.query.ClinicName || req.query["Clinic Name"];
            const State = req.query.State;
            const Availability = req.query.Availability;
           

            const result = clinicRepo.searchClinicData(ClinicName, State, Availability);
            res.send(result);
        });

    app.use('/clinic', router);
};

module.exports = getClinicRoutes;