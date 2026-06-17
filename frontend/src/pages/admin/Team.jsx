// import { useState } from "react";
// import { useQuery, useQueryClient } from "@tanstack/react-query";

// import DataTable from "../../components/admin/DataTable";
// import FormModal from "../../components/admin/FormModal";
// import DeleteModal from "../../components/admin/DeleteModal";

// import {
//   getTeam,
//   createMember,
//   updateMember,
//   deleteMember,
// } from "../../api/teamApi";

// const Team = () => {
//   const queryClient = useQueryClient();

//   const [openForm, setOpenForm] = useState(false);
//   const [openDelete, setOpenDelete] = useState(false);
//   const [selected, setSelected] = useState(null);

//   const { data = [] } = useQuery({
//     queryKey: ["team"],
//     queryFn: getTeam,
//   });

//   const fields = [
//     { key: "name", label: "Name" },
//     { key: "designation", label: "Designation" },
//     { key: "department", label: "Department" },
//     { key: "category", label: "Category" },
//   ];

//   const handleSubmit = async (form) => {
//     if (selected) {
//       await updateMember(selected._id, form);
//     } else {
//       await createMember(form);
//     }

//     setOpenForm(false);
//     setSelected(null);
//     queryClient.invalidateQueries(["team"]);
//   };

//   const handleDelete = async () => {
//     await deleteMember(selected._id);
//     setOpenDelete(false);
//     setSelected(null);
//     queryClient.invalidateQueries(["team"]);
//   };

//   return (
//     <div>
//       <h1 className="text-white text-2xl mb-4">Team</h1>

//       <button
//         onClick={() => setOpenForm(true)}
//         className="bg-green-600 px-4 py-2 rounded mb-4"
//       >
//         Add Member
//       </button>

//       <DataTable
//         columns={[
//           { key: "name", label: "Name" },
//           { key: "designation", label: "Designation" },
//           { key: "category", label: "Category" },
//         ]}
//         data={data}
//         onEdit={(item) => {
//           setSelected(item);
//           setOpenForm(true);
//         }}
//         onDelete={(item) => {
//           setSelected(item);
//           setOpenDelete(true);
//         }}
//       />

//       <FormModal
//         open={openForm}
//         onClose={() => setOpenForm(false)}
//         initialData={selected}
//         fields={fields}
//         onSubmit={handleSubmit}
//       />

//       <DeleteModal
//         open={openDelete}
//         onClose={() => setOpenDelete(false)}
//         onConfirm={handleDelete}
//       />
//     </div>
//   );
// };

// export default Team;

import { useState } from "react";

import {
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import AdminLayout from "../../components/admin/AdminLayout";

import DataTable from "../../components/admin/DataTable";
import FormModal from "../../components/admin/FormModal";
import DeleteModal from "../../components/admin/DeleteModal";

import {
  getTeam,
  createMember,
  updateMember,
  deleteMember,
} from "../../api/teamApi";

const Team = () => {
  const queryClient =
    useQueryClient();

  const [openForm, setOpenForm] =
    useState(false);

  const [openDelete, setOpenDelete] =
    useState(false);

  const [selected, setSelected] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const {
    data = [],
    isLoading,
  } = useQuery({
    queryKey: ["team"],
    queryFn: getTeam,
  });

  const fields = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "designation",
      label: "Designation",
    },
    {
      key: "department",
      label: "Department",
    },
    {
      key: "category",
      label: "Category",
    },
  ];

  const handleSubmit =
    async (form) => {

      setLoading(true);

      try {

        if (selected) {
          await updateMember(
            selected._id,
            form
          );
        } else {
          await createMember(
            form
          );
        }

        queryClient.invalidateQueries({
          queryKey: ["team"],
        });

        setOpenForm(false);
        setSelected(null);

      } finally {
        setLoading(false);
      }
    };

  const handleDelete =
    async () => {

      setLoading(true);

      try {

        await deleteMember(
          selected._id
        );

        queryClient.invalidateQueries({
          queryKey: ["team"],
        });

        setOpenDelete(false);
        setSelected(null);

      } finally {
        setLoading(false);
      }
    };

  return (
    <AdminLayout>

      <div
        className="
        flex
        flex-col
        gap-4
        md:flex-row
        md:items-center
        md:justify-between
        mb-8
        "
      >

        <div>

          <h1
            className="
            text-2xl
            md:text-3xl
            font-bold
            text-white
            "
          >
            Team Management
          </h1>

          <p
            className="
            text-gray-400
            mt-1
            "
          >
            Manage Team Members
          </p>

        </div>

        <button
          onClick={() => {
            setSelected(null);
            setOpenForm(true);
          }}
          className="
          w-full
          md:w-auto
          bg-green-600
          hover:bg-green-700
          text-white
          px-5
          py-3
          rounded-xl
          "
        >
          + Add Member
        </button>

      </div>

      <div
        className="
        hidden
        md:block
        bg-[#111827]
        border
        border-gray-800
        rounded-2xl
        p-6
        "
      >

        <DataTable
          columns={[
            {
              key: "name",
              label: "Name",
            },
            {
              key: "designation",
              label: "Designation",
            },
            {
              key: "category",
              label: "Category",
            },
          ]}
          data={data}
          onEdit={(item) => {
            setSelected(item);
            setOpenForm(true);
          }}
          onDelete={(item) => {
            setSelected(item);
            setOpenDelete(true);
          }}
        />

      </div>

      <div
        className="
        md:hidden
        space-y-4
        "
      >

        {data.map((item) => (

          <div
            key={item._id}
            className="
            bg-[#111827]
            border
            border-gray-800
            rounded-2xl
            p-4
            "
          >

            <h3
              className="
              text-white
              text-lg
              font-semibold
              "
            >
              {item.name}
            </h3>

            <p className="text-gray-400">
              {item.designation}
            </p>

            <p className="text-gray-500 text-sm">
              {item.department}
            </p>

            <div
              className="
              inline-flex
              mt-3
              px-3
              py-1
              rounded-full
              bg-green-900
              text-green-300
              text-xs
              "
            >
              {item.category}
            </div>

            <div
              className="
              flex
              gap-3
              mt-4
              "
            >

              <button
                onClick={() => {
                  setSelected(item);
                  setOpenForm(true);
                }}
                className="
                flex-1
                bg-blue-600
                py-2
                rounded-lg
                text-white
                "
              >
                Edit
              </button>

              <button
                onClick={() => {
                  setSelected(item);
                  setOpenDelete(true);
                }}
                className="
                flex-1
                bg-red-600
                py-2
                rounded-lg
                text-white
                "
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

      <FormModal
        open={openForm}
        onClose={() =>
          setOpenForm(false)
        }
        initialData={selected}
        fields={fields}
        onSubmit={handleSubmit}
      />

      <DeleteModal
        open={openDelete}
        onClose={() =>
          setOpenDelete(false)
        }
        onConfirm={handleDelete}
        loading={loading}
      />

    </AdminLayout>
  );
};

export default Team;