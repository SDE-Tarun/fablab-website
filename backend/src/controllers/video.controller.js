const Video = require(
  "../models/video.model"
);

const getAllVideos =
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
        await Video.countDocuments(
          query
        );

      const videos =
        await Video.find(query)
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

        data: videos,

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

const getFeaturedVideos =
  async (req, res) => {
    try {
      const videos =
        await Video.find({
          featured: true,
          status: "active",
        });

      res.status(200).json({
        success: true,
        data: videos,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

    const createVideo= async (
    req,
    res
  ) => {
    try {
  
      const videos =
        await Video.create(
          req.body
        );
  
      res.status(201).json({
        success: true,
        data: videos,
      });
  
    } catch (error) {
  
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
  
    }
  };
  
  const updateVideo = async (
    req,
    res
  ) => {
    try {
  
      const videos =
        await Video.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );
  
      res.status(200).json({
        success: true,
        data: videos,
      });
  
    } catch (error) {
  
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
  
    }
  };
  
  const deleteVideo = async (
    req,
    res
  ) => {
    try {
      const videos =
      await Video.findByIdAndDelete(
        req.params.id
      );
  
      res.status(200).json({
        success: true,
        message:
          "Video Deleted",
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
  getAllVideos,
  getFeaturedVideos,
  createVideo,
  updateVideo,
  deleteVideo
};