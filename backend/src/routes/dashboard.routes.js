const express = require("express");

const {
  getDashboardStats,
} = require(
  "../controllers/dashboard.controller"
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
  "/stats",
  protect,
  authorize(
    "super-admin",
    "admin"
  ),
  getDashboardStats
);

module.exports =
  router;