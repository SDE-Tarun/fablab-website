// const jwt = require("jsonwebtoken");

// const protect = (req, res, next) => {
//   console.log("===========");
//   console.log("HEADERS:", req.headers);
//   console.log("AUTH:", req.headers.authorization);

//   try {
//     const authHeader =
//     console.log("AUTHORIZATION HEADER:");
// console.log(req.headers.authorization);

// console.log("ALL HEADERS:");
// console.log(req.headers);
//       // req.headers.authorization;

//     if (
//       !authHeader ||
//       !authHeader.startsWith("Bearer ")
//     ) {
//       return res.status(401).json({
//         success: false,
//         message: "Unauthorized",
//       });
//     }

//     const token =
//       authHeader.split(" ")[1];

//     console.log("TOKEN:", token);

//     const decoded = jwt.verify(
//       token,
//       process.env.JWT_SECRET
//     );

//     console.log("DECODED:", decoded);

//     req.user = decoded;

//     next();
//   } catch (error) {
//     console.log("JWT ERROR:", error.message);

//     return res.status(401).json({
//       success: false,
//       message: "Invalid Token",
//     });
//   }
// };

// module.exports = {
//   protect,
// };

const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    const authHeader =
      req.headers.authorization;

    console.log(
      "AUTH HEADER:",
      authHeader
    );

    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const token =
      authHeader.split(" ")[1];

    console.log(
      "TOKEN:",
      token
    );

    console.log(
      "JWT SECRET:",
      process.env.JWT_SECRET
    );

    const decoded =
      jwt.verify(
        token,
        process.env.JWT_SECRET
      );

    console.log(
      "DECODED:",
      decoded
    );

    req.user = decoded;

    next();

  } catch (error) {

    console.log(
      "JWT ERROR:",
      error
    );

    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  protect,
};