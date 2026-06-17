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
  getLabs,
  createLab,
  updateLab,
  deleteLab,
} from "../../api/labsApi";

const Labs = () => {
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
    queryKey: ["labs"],
    queryFn: getLabs,
  });

  const fields = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "slug",
      label: "Slug",
    },
    {
      key: "shortDescription",
      label: "Short Description",
    },
    {
      key: "description",
      label: "Description",
    },
    {
      key: "status",
      label: "Status",
    },
  ];

  const handleSubmit =
    async (form) => {
      setLoading(true);

      try {
        if (selected) {
          await updateLab(
            selected._id,
            form
          );
        } else {
          await createLab(form);
        }

        queryClient.invalidateQueries({
          queryKey: ["labs"],
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
        await deleteLab(
          selected._id
        );

        queryClient.invalidateQueries({
          queryKey: ["labs"],
        });

        setOpenDelete(false);
        setSelected(null);

      } finally {
        setLoading(false);
      }
    };

  return (
    <AdminLayout>

      {/* HEADER */}

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
            Labs Management
          </h1>

          <p
            className="
            text-gray-400
            mt-1
            text-sm
            md:text-base
            "
          >
            Create, update and manage labs
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
          font-medium
          transition
          "
        >
          + Add Lab
        </button>

      </div>

      {/* DESKTOP TABLE */}

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
        {isLoading ? (
          <div className="text-gray-300">
            Loading Labs...
          </div>
        ) : (
          <DataTable
            columns={[
              {
                key: "name",
                label: "Name",
              },
              {
                key: "slug",
                label: "Slug",
              },
              {
                key: "status",
                label: "Status",
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
        )}
      </div>

      {/* MOBILE CARDS */}

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
              font-semibold
              text-lg
              "
            >
              {item.name}
            </h3>

            <p
              className="
              text-gray-400
              text-sm
              mt-2
              "
            >
              {item.slug}
            </p>

            <div
              className="
              mt-3
              inline-flex
              px-3
              py-1
              rounded-full
              text-xs
              bg-green-900
              text-green-300
              "
            >
              {item.status}
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
                py-2
                bg-blue-600
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
                py-2
                bg-red-600
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

export default Labs;