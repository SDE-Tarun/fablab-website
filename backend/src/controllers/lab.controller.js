const Lab = require("../models/lab.model");

const getAllLabs =
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
        name: {
          $regex: search,
          $options: "i",
        },
      };

      const total =
        await Lab.countDocuments(
          query
        );

      const labs =
        await Lab.find(query)
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

        data: labs,

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

const getLabBySlug = async (
  req,
  res
) => {
  try {
    const lab =
      await Lab.findOne({
        slug: req.params.slug,
      });

    if (!lab) {
      return res.status(404).json({
        success: false,
        message: "Lab not found",
      });
    }

    res.status(200).json({
      success: true,
      data: lab,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createLab = async (
  req,
  res
) => {
  try {

    const lab =
      await Lab.create(
        req.body
      );

    res.status(201).json({
      success: true,
      data: lab,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message:
        error.message,
    });

  }
};

const updateLab = async (
  req,
  res
) => {
  try {

    const lab =
      await Lab.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.status(200).json({
      success: true,
      data: lab,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message:
        error.message,
    });

  }
};

const deleteLab = async (
  req,
  res
) => {
  try {

    await Lab.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message:
        "Lab Deleted",
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
  getAllLabs,
  getLabBySlug,
  createLab,
  updateLab,
  deleteLab
};