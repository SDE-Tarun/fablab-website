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
  getVideos,
  createVideo,
  updateVideo,
  deleteVideo,
} from "../../api/videosApi";

const Videos = () => {
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
    queryKey: ["videos"],
    queryFn: getVideos,
  });

  const fields = [
    {
      key: "title",
      label: "Title",
    },
    {
      key: "slug",
      label: "Slug",
    },
    {
      key: "videoUrl",
      label: "Video URL",
    },
    {
      key: "category",
      label: "Category",
    },
    {
      key: "featured",
      label: "Featured",
    },
  ];

  const handleSubmit =
    async (form) => {
      setLoading(true);

      try {
        if (selected) {
          await updateVideo(
            selected._id,
            form
          );
        } else {
          await createVideo(
            form
          );
        }

        queryClient.invalidateQueries({
          queryKey: ["videos"],
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

        await deleteVideo(
          selected._id
        );

        queryClient.invalidateQueries({
          queryKey: ["videos"],
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
            Videos Management
          </h1>

          <p
            className="
            text-gray-400
            mt-1
            "
          >
            Create, update and manage videos
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
          + Add Video
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
            Loading Videos...
          </div>
        ) : (
          <DataTable
            columns={[
              {
                key: "title",
                label: "Title",
              },
              {
                key: "category",
                label: "Category",
              },
              {
                key: "featured",
                label: "Featured",
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
              text-lg
              font-semibold
              "
            >
              {item.title}
            </h3>

            <p
              className="
              text-gray-400
              text-sm
              mt-2
              "
            >
              {item.category}
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
              {item.featured
                ? "Featured"
                : "Normal"}
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

export default Videos;