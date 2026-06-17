const Organogram =
  require(
    "../models/organogram.model"
  );

const getOrganogram =
  async (req, res) => {
    try {
      const nodes =
        await Organogram.find({
          status: "active",
        });

      res.status(200).json({
        success: true,
        data: nodes,
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
  getOrganogram,
};