const express =
  require("express");

const {
  getAllVideos,
  getFeaturedVideos,
  createVideo,
  updateVideo,
  deleteVideo
} = require(
  "../controllers/video.controller"
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
  getAllVideos
);

router.post(
  "/",
  protect,
  authorize(
    "super-admin",
    "admin"
  ),
  createVideo
);

router.put(
  "/:id",
  protect,
  authorize(
    "super-admin",
    "admin"
  ),
  updateVideo
);

router.delete(
  "/:id",
  protect,
  authorize(
    "super-admin",
    "admin"
  ),
  deleteVideo
);

router.get(
  "/featured",
  getFeaturedVideos
);

module.exports = router;