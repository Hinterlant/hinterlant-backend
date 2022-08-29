const Project = require('../models/projectModel');

exports.getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find({});

    res.status(200).json({
      status: 'success',
      data: { projects },
    });
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      msg: err,
    });
  }
};

exports.getProject = async (req, res, next) => {
  try {
    const project = await Project.findOne({ _id: req.params.id });

    res.status(200).json({
      status: 'success',
      data: { project },
    });
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      msg: err,
    });
  }
};
