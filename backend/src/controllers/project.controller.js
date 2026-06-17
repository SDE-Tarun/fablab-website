const Project = require("../models/project.model");

const getAllProjects =
  async (req, res) => {

    try {

      const page =
        Number(
          req.query.page
        ) || 1;

      const limit =
        Number(
          req.query.limit
        ) || 10;

      const search =
        req.query.search || "";

      const query = {
        title: {
          $regex: search,
          $options: "i",
        },
      };

      const total =
        await Project.countDocuments(
          query
        );

      const projects =
        await Project.find(query)
          .skip(
            (page - 1) *
              limit
          )
          .limit(limit)
          .sort({
            createdAt: -1,
          });

      res.status(200).json({
        success: true,

        data: projects,

        pagination: {
          total,
          page,
          limit,
          pages:
            Math.ceil(
              total / limit
            ),
        },
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });

    }
  };

const getProjectBySlug =
  async (req, res) => {
    try {
      const project =
        await Project.findOne({
          slug: req.params.slug,
        });

      if (!project) {
        return res.status(404).json({
          success: false,
          message:
            "Project not found",
        });
      }

      res.status(200).json({
        success: true,
        data: project,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

  const createProject = async (
    req,
    res
  ) => {
    try {
  
      const project =
        await Project.create(
          req.body
        );
  
      res.status(201).json({
        success: true,
        data: project,
      });
  
    } catch (error) {
  
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
  
    }
  };
  
  const updateProject = async (
    req,
    res
  ) => {
    try {
  
      const project =
        await Project.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );
  
      res.status(200).json({
        success: true,
        data: project,
      });
  
    } catch (error) {
  
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
  
    }
  };
  
  const deleteProject = async (
    req,
    res
  ) => {
    try {
      const project =
      await Project.findByIdAndDelete(
        req.params.id
      );
  
      res.status(200).json({
        success: true,
        message:
          "Project Deleted",
      });
  
    } catch (error) {
  
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
  
    }
  };

module.exports = {
  getAllProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject
};

