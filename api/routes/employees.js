const express = require("express");
const router = express.Router();

const Employee = require('../models/employee');

router.get("/api", (req, res, next) => {
  res.status(200).json({
    message: "Employee catched",
  });
});

router.get("/api/:employeeId", (req, res, next)=>{
    const id = req.params.employeeId;
    res.status(200).json({
        id: id
    });
});

router.post("/api", (req, res, next) => {
    const employee = {
        name: req.body.name,
        address: req.body.address,
        borndate: req.body.borndate,
        job_position: req.body.job_position,
    }
  res.status(200).json({
    message: "Employee added",
    employee: employee
  });
});

module.exports = router;
