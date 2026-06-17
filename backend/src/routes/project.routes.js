const express = require("express");

const {
  getAllProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject
} = require(
  "../controllers/project.controller"
);

const {
  protect,
} = require(
  "../middlewares/auth.middleware"
);

const {
  authorize,
} = require(
  "../middlewares/role.middleware"
);

const router =
  express.Router();

router.get(
  "/",
  getAllProjects
);

router.get(
  "/:slug",
  getProjectBySlug
);

router.post(
  "/",
  protect,
  authorize(
    "super-admin",
    "admin"
  ),
  createProject
);

router.put(
  "/:id",
  protect,
  authorize(
    "super-admin",
    "admin"
  ),
  updateProject
);

router.delete(
  "/:id",
  protect,
  authorize(
    "super-admin",
    "admin"
  ),
  deleteProject
);

module.exports = router;