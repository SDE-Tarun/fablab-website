import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../components/layouts/MainLayout";

import Home from "../pages/Home";
import Labs from "../pages/Labs";
import LabDetails from "../pages/LabDetails";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import Team from "../pages/Team";
import Organogram from "../pages/Organogram";
import VideoGallery from "../pages/VideoGallery";
import Contact from "../pages/Contact";

import Dashboard from "../pages/admin/Dashboard";
import Messages from "../pages/admin/Messages";
import Login from "../pages/admin/Login";

import ProtectedRoute from "../routes/ProtectedRoutes";

import AdminLabs from "../pages/admin/Labs";

import AdminProjects from "../pages/admin/Projects";

import AdminTeam from "../pages/admin/Team";

import AdminVideos from "../pages/admin/Videos";

import Settings from "../pages/admin/Settings";

const PublicLayout = ({ children }) => (
  <MainLayout>{children}</MainLayout>
);

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* PUBLIC */}

        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />

        <Route
          path="/labs"
          element={
            <PublicLayout>
              <Labs />
            </PublicLayout>
          }
        />

        <Route
          path="/labs/:slug"
          element={
            <PublicLayout>
              <LabDetails />
            </PublicLayout>
          }
        />

        <Route
          path="/projects"
          element={
            <PublicLayout>
              <Projects />
            </PublicLayout>
          }
        />

        <Route
          path="/projects/:slug"
          element={
            <PublicLayout>
              <ProjectDetails />
            </PublicLayout>
          }
        />

        <Route
          path="/team"
          element={
            <PublicLayout>
              <Team />
            </PublicLayout>
          }
        />

        <Route
          path="/organogram"
          element={
            <PublicLayout>
              <Organogram />
            </PublicLayout>
          }
        />

        <Route
          path="/videos"
          element={
            <PublicLayout>
              <VideoGallery />
            </PublicLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <PublicLayout>
              <Contact />
            </PublicLayout>
          }
        />

        {/* ADMIN LOGIN */}

        <Route
          path="/admin/login"
          element={<Login />}
        />

        {/* PROTECTED */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/labs"
          element={
            <ProtectedRoute>
              <AdminLabs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/projects"
          element={
            <ProtectedRoute>
              <AdminProjects />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/team"
          element={
            <ProtectedRoute>
              <AdminTeam />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/videos"
          element={
            <ProtectedRoute>
              <AdminVideos />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/messages"
          element={
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;