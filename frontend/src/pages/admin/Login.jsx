import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import toast from "react-hot-toast";

import {
  loginAdmin,
} from "../../api/authApi";

import {
  useAuth,
} from "../../context/AuthContext";

const Login = () => {

  const navigate =
    useNavigate();

  const { login } =
    useAuth();

  const [showPassword,
    setShowPassword] =
    useState(false);

  const [loading,
    setLoading] =
    useState(false);

  const [form,
    setForm] =
    useState({
      email: "",
      password: "",
    });

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const data =
          await loginAdmin(
            form
          );

        login(data);

        toast.success(
          "Login Successful"
        );

        navigate(
          "/admin"
        );

      } catch (error) {

        toast.error(
          error.response?.data
            ?.message ||
          "Login Failed"
        );

      } finally {

        setLoading(false);

      }
    };

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#0B1120]
      px-6
      "
    >

      <form
        onSubmit={
          handleSubmit
        }
        className="
        w-full
        max-w-md
        bg-[#111827]
        p-8
        rounded-2xl
        border
        border-gray-800
        "
      >

        <h1
          className="
          text-white
          text-3xl
          font-bold
          mb-8
          text-center
          "
        >
          FabLab Admin
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email:
                e.target.value,
            })
          }
          className="
          w-full
          mb-4
          p-4
          rounded-xl
          bg-[#0B1120]
          text-white
          border
          border-gray-700
          "
        />

        <div className="relative">

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Password"
            value={
              form.password
            }
            onChange={(e) =>
              setForm({
                ...form,
                password:
                  e.target.value,
              })
            }
            className="
            w-full
            p-4
            rounded-xl
            bg-[#0B1120]
            text-white
            border
            border-gray-700
            "
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="
            absolute
            right-4
            top-4
            text-gray-400
            "
          >
            {showPassword
              ? <FaEyeSlash />
              : <FaEye />}
          </button>

        </div>

        <button
          disabled={loading}
          className="
          w-full
          mt-6
          py-4
          rounded-xl
          bg-green-600
          hover:bg-green-700
          text-white
          font-semibold
          "
        >
          {loading
            ? "Signing In..."
            : "Login"}
        </button>

      </form>

    </div>
  );
};

export default Login;