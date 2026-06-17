const express = require("express");

const {
  getOrganogram,
} = require(
  "../controllers/organogram.controller"
);

const router =
  express.Router();

router.get(
  "/",
  getOrganogram
);

module.exports = router;