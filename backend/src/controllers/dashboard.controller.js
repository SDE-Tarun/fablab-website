const Lab = require("../models/lab.model");
const Project = require("../models/project.model");
const Team = require("../models/team.model");
const Video = require("../models/video.model");
const Contact = require("../models/contact.model");

const getDashboardStats = async (req, res) => {
  try {
    const [
      labs,
      projects,
      team,
      videos,
      messages,
    ] = await Promise.all([
      Lab.countDocuments(),
      Project.countDocuments(),
      Team.countDocuments(),
      Video.countDocuments(),
      Contact.countDocuments(),
    ]);

    res.json({
      success: true,
      data: {
        labs,
        projects,
        team,
        videos,
        messages,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};