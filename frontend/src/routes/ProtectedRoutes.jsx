// import {
//   Navigate,
// } from "react-router-dom";

// import {
//   useAuth,
// } from "../context/AuthContext";

// const ProtectedRoute = ({
//   children,
// }) => {

//   const { admin } =
//     useAuth();

//   if (!admin) {
//     return (
//       <Navigate
//         to="/admin/login"
//         replace
//       />
//     );
//   }

//   return children;
// };

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({
  children,
}) => {

  const {
    admin,
    loading,
  } = useAuth();

  if (loading) {
    return (
      <div
        className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#0B1120]
        text-white
        "
      >
        Loading...
      </div>
    );
  }

  if (!admin) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;