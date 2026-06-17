import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  refreshToken,
} from "../api/authApi";

const AuthContext =
  createContext();

export const AuthProvider = ({
  children,
}) => {

  const [admin, setAdmin] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const storedAdmin =
      localStorage.getItem(
        "admin"
      );

    const accessToken =
      localStorage.getItem(
        "accessToken"
      );

    if (
      storedAdmin &&
      accessToken
    ) {

      setAdmin(
        JSON.parse(
          storedAdmin
        )
      );

      setLoading(false);

      return;
    }

    const refresh =
      localStorage.getItem(
        "refreshToken"
      );

    if (!refresh) {
      setLoading(false);
      return;
    }

    restoreSession(
      refresh
    );

  }, []);

  // const restoreSession =
  //   async (token) => {

  //     try {

  //       const response =
  //         await refreshToken(
  //           token
  //         );

  //       localStorage.setItem(
  //         "accessToken",
  //         response.accessToken
  //       );

  //       localStorage.setItem(
  //         "admin",
  //         JSON.stringify(
  //           response.admin
  //         )
  //       );

  //       setAdmin(
  //         response.admin
  //       );

  //     } catch {

  //       localStorage.clear();

  //     } finally {

  //       setLoading(false);

  //     }
  //   };

  const restoreSession =
  async (token) => {

    try {

      const response =
        await refreshToken(
          token
        );

      localStorage.setItem(
        "accessToken",
        response.accessToken
      );

      localStorage.setItem(
        "admin",
        JSON.stringify(
          response.admin
        )
      );

      setAdmin(
        response.admin
      );

    } catch (error) {

      console.log(
        "Session Restore Failed",
        error
      );

      localStorage.clear();

      setAdmin(null);

    } finally {

      setLoading(false);

    }
  };

  const login =
    ({
      admin,
      accessToken,
      refreshToken,
    }) => {

      localStorage.setItem(
        "admin",
        JSON.stringify(
          admin
        )
      );

      localStorage.setItem(
        "accessToken",
        accessToken
      );

      localStorage.setItem(
        "refreshToken",
        refreshToken
      );

      setAdmin(admin);
    };

  const logout = () => {

    localStorage.clear();

    setAdmin(null);

  };

  return (
    <AuthContext.Provider
      value={{
        admin,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth =
  () =>
    useContext(
      AuthContext
    );