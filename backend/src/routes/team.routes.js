const express = require("express");

const {
  getAllMembers,
  createMember,
  updateMember,
  deleteMember
} = require(
  "../controllers/team.controller"
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
  getAllMembers
);

router.post(
  "/",
  protect,
  authorize(
    "super-admin",
    "admin"
  ),
  createMember
);

router.put(
  "/:id",
  protect,
  authorize(
    "super-admin",
    "admin"
  ),
  updateMember
);

router.delete(
  "/:id",
  protect,
  authorize(
    "super-admin",
    "admin"
  ),
  deleteMember
);

module.exports = router;