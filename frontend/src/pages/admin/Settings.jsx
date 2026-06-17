import AdminLayout from "../../components/admin/AdminLayout";

import {
  useAuth,
} from "../../context/AuthContext";

const Settings = () => {

  const { admin } =
    useAuth();

  return (
    <AdminLayout>

      <div
        className="
        bg-[#111827]
        border
        border-gray-800
        rounded-2xl
        p-8
        "
      >

        <h1
          className="
          text-3xl
          font-bold
          text-white
          mb-8
          "
        >
          Settings
        </h1>

        <div className="space-y-4">

          <div>
            <p className="text-gray-400">
              Name
            </p>

            <p className="text-white">
              {admin?.name}
            </p>
          </div>

          <div>
            <p className="text-gray-400">
              Email
            </p>

            <p className="text-white">
              {admin?.email}
            </p>
          </div>

          <div>
            <p className="text-gray-400">
              Role
            </p>

            <p className="text-green-400">
              {admin?.role}
            </p>
          </div>

        </div>

      </div>

    </AdminLayout>
  );
};

export default Settings;