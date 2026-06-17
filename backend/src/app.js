const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

const labRoutes = require("./routes/lab.routes");

const projectRoutes = require("./routes/project.routes");

const teamRoutes = require("./routes/team.routes");

const organogramRoutes = require("./routes/organogram.routes");

const videoRoutes = require("./routes/video.routes");

const contactRoutes = require("./routes/contact.routes");

const dashboardRoutes = require("./routes/dashboard.routes");

const adminRoutes = require("./routes/admin.routes");

const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(hpp());

app.use(morgan("dev"));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Fablab API Running",
  });
});

app.use("/api/v1/labs", labRoutes);

app.use("/api/v1/projects", projectRoutes);

app.use("/api/v1/team", teamRoutes);

app.use("/api/v1/organogram", organogramRoutes);

app.use("/api/v1/videos", videoRoutes);

app.use("/api/v1/contact", contactRoutes);

app.use("/api/v1/dashboard", dashboardRoutes);

app.use("/api/v1/admin", adminRoutes);

// 404 handler for Express 5
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

module.exports = app;