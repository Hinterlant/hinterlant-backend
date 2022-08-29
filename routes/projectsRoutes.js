const express = require('express');
const projectsController = require('../controllers/projectsController');

const router = express.Router();

router.get('/', projectsController.getAllProjects);

router.get('/:id', projectsController.getProject);

module.exports = router;
