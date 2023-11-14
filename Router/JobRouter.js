const express = require("express");
const JobRouter = express.Router(); // create a router

// Controllers
const JobController = require("../Controller/JobController");
const { checkJobInput } = require("../Validation/JobDataRules");
const {
    inputValidationMiddleware,
} = require("../Validation/ValidationMiddleware");

// Routes
JobRouter.route("/")
    .get(JobController.getAllJobs)
    .post(checkJobInput, inputValidationMiddleware, JobController.addJob);
JobRouter.route("/:id")
    .get(JobController.getSingleJob)
    .patch(JobController.updateSingleJob)
    .delete(JobController.deleteSingleJob);

module.exports = JobRouter;

// Extra----------------------------
// JobRouter.get("/", JobController.getAllJobs); //Get all jobs
// JobRouter.post("/", JobController.addJob); //Add all jobs
// JobRouter.get("/:id", JobController.getSingleJob); //Get Single all jobs
