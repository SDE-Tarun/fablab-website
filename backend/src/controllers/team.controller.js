const Team = require("../models/team.model");

const getAllMembers =
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
        await Team.countDocuments(
          query
        );

      const members =
        await Team.find(query)
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

        data: members,

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

const createMember = async (
    req,
    res
  ) => {
    try {
  
      const members =
        await Team.create(
          req.body
        );
  
      res.status(201).json({
        success: true,
        data: members,
      });
  
    } catch (error) {
  
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
  
    }
  };
  
  const updateMember = async (
    req,
    res
  ) => {
    try {
  
      const members =
        await Team.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );
  
      res.status(200).json({
        success: true,
        data: members,
      });
  
    } catch (error) {
  
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
  
    }
  };
  
  const deleteMember = async (
    req,
    res
  ) => {
    try {
      const members =
      await Team.findByIdAndDelete(
        req.params.id
      );
  
      res.status(200).json({
        success: true,
        message:
          "Member Deleted",
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
  getAllMembers,
  createMember,
  updateMember,
  deleteMember
};