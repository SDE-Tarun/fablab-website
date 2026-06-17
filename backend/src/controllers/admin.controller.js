const bcrypt =
  require("bcryptjs");

const jwt =
  require("jsonwebtoken");

const Admin =
  require(
    "../models/admin.model"
  );

const login =
  async (req, res) => {
    try {

      const {
        email,
        password,
      } = req.body;

      const admin =
        await Admin.findOne({
          email,
        });

      if (!admin) {
        return res
          .status(401)
          .json({
            success: false,
            message:
              "Invalid Credentials",
          });
      }

      const match =
        await bcrypt.compare(
          password,
          admin.password
        );

      if (!match) {
        return res
          .status(401)
          .json({
            success: false,
            message:
              "Invalid Credentials",
          });
      }

      const accessToken =
        jwt.sign(
          {
            id: admin._id,
            role:
              admin.role,
          },
          process.env.JWT_SECRET,
          {
            expiresIn:
              "15m",
          }
        );

      const refreshToken =
        jwt.sign(
          {
            id: admin._id,
          },
          process.env.JWT_REFRESH_SECRET,
          {
            expiresIn:
              "7d",
          }
        );

      res.json({
        success: true,

        accessToken,

        refreshToken,

        admin: {
          id: admin._id,
          name:
            admin.name,
          email:
            admin.email,
          role:
            admin.role,
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

  const refreshAccessToken =
  async (req, res) => {

    try {

      const {
        refreshToken,
      } = req.body;

      if (!refreshToken) {
        return res
          .status(401)
          .json({
            success: false,
            message:
              "Refresh Token Required",
          });
      }

      const decoded =
        jwt.verify(
          refreshToken,
          process.env.JWT_REFRESH_SECRET
        );

      const admin =
        await Admin.findById(
          decoded.id
        );

      if (!admin) {
        return res
          .status(401)
          .json({
            success: false,
            message:
              "Admin Not Found",
          });
      }

      const accessToken =
        jwt.sign(
          {
            id: admin._id,
            role:
              admin.role,
          },
          process.env.JWT_SECRET,
          {
            expiresIn:
              "15m",
          }
        );

      res.json({
        success: true,
        accessToken,
        admin: {
          id: admin._id,
          name:
            admin.name,
          email:
            admin.email,
          role:
            admin.role,
        },
      });

    } catch {

      return res
        .status(401)
        .json({
          success: false,
          message:
            "Invalid Refresh Token",
        });
    }
  };

module.exports = {
  login,
  refreshAccessToken,
};