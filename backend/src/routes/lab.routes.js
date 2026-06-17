const express =
  require("express");

const {
  getAllLabs,
  getLabBySlug,
  createLab,
  updateLab,
  deleteLab,
} = require(
  "../controllers/lab.controller"
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
  getAllLabs
);

router.get(
  "/:slug",
  getLabBySlug
);

router.post(
  "/",
  protect,
  authorize(
    "super-admin",
    "admin"
  ),
  createLab
);

router.put(
  "/:id",
  protect,
  authorize(
    "super-admin",
    "admin"
  ),
  updateLab
);

router.delete(
  "/:id",
  protect,
  authorize(
    "super-admin",
    "admin"
  ),
  deleteLab
);

module.exports =
  router;