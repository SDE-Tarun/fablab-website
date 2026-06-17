import { useState } from "react";

import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import AdminLayout from "../../components/admin/AdminLayout";

import {
  getMessages,
  updateStatus,
  deleteMessage,
} from "../../api/adminApi";

const Messages = () => {
  const queryClient =
    useQueryClient();

  const [search, setSearch] =
    useState("");

  const {
    data = [],
    isLoading,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: getMessages,
  });

  const statusMutation =
    useMutation({
      mutationFn: ({
        id,
        status,
      }) =>
        updateStatus(
          id,
          status
        ),

      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: ["messages"],
        }),
    });

  const deleteMutation =
    useMutation({
      mutationFn:
        deleteMessage,

      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: ["messages"],
        }),
    });

  const filtered =
    data.filter(
      (item) =>
        item.name
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        item.email
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        item.subject
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (
    <AdminLayout>

      {/* HEADER */}

      <div
        className="
        flex
        flex-col
        gap-4
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
            Contact Messages
          </h1>

          <p
            className="
            text-gray-400
            mt-1
            "
          >
            Manage visitor enquiries
          </p>

        </div>

        <input
          placeholder="Search by name, email or subject..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="
          w-full
          bg-[#111827]
          border
          border-gray-700
          rounded-xl
          p-4
          text-white
          focus:outline-none
          focus:border-green-500
          "
        />

      </div>

      {/* LOADING */}

      {isLoading ? (
        <div
          className="
          bg-[#111827]
          border
          border-gray-800
          rounded-2xl
          p-6
          "
        >
          <p className="text-gray-300">
            Loading Messages...
          </p>
        </div>
      ) : (
        <>
          {/* DESKTOP TABLE */}

          <div
            className="
            hidden
            md:block
            bg-[#111827]
            border
            border-gray-800
            rounded-2xl
            overflow-hidden
            "
          >

            <div className="overflow-x-auto">

              <table
                className="
                w-full
                text-white
                "
              >
                <thead
                  className="
                  bg-[#0B1120]
                  "
                >
                  <tr>
                    <th className="p-4 text-left">
                      Name
                    </th>

                    <th className="p-4 text-left">
                      Email
                    </th>

                    <th className="p-4 text-left">
                      Subject
                    </th>

                    <th className="p-4 text-left">
                      Status
                    </th>

                    <th className="p-4 text-left">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {filtered.map(
                    (item) => (
                      <tr
                        key={
                          item._id
                        }
                        className="
                        border-t
                        border-gray-800
                        hover:bg-[#0F172A]
                        "
                      >
                        <td className="p-4">
                          {item.name}
                        </td>

                        <td className="p-4">
                          {item.email}
                        </td>

                        <td className="p-4">
                          {item.subject}
                        </td>

                        <td className="p-4">

                          <select
                            value={
                              item.status
                            }
                            onChange={(
                              e
                            ) =>
                              statusMutation.mutate(
                                {
                                  id:
                                    item._id,
                                  status:
                                    e
                                      .target
                                      .value,
                                }
                              )
                            }
                            className="
                            bg-[#0B1120]
                            border
                            border-gray-700
                            rounded-lg
                            px-3
                            py-2
                            text-white
                            "
                          >
                            <option value="new">
                              New
                            </option>

                            <option value="in-progress">
                              In Progress
                            </option>

                            <option value="resolved">
                              Resolved
                            </option>

                          </select>

                        </td>

                        <td className="p-4">

                          <button
                            onClick={() =>
                              deleteMutation.mutate(
                                item._id
                              )
                            }
                            className="
                            bg-red-600
                            hover:bg-red-700
                            px-4
                            py-2
                            rounded-lg
                            text-sm
                            "
                          >
                            Delete
                          </button>

                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>

            </div>

          </div>

          {/* MOBILE CARDS */}

          <div
            className="
            md:hidden
            space-y-4
            "
          >

            {filtered.map(
              (item) => (
                <div
                  key={
                    item._id
                  }
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
                    break-all
                    "
                  >
                    {item.email}
                  </p>

                  <p
                    className="
                    text-gray-300
                    mt-3
                    "
                  >
                    {item.subject}
                  </p>

                  <div
                    className="
                    mt-4
                    "
                  >

                    <select
                      value={
                        item.status
                      }
                      onChange={(
                        e
                      ) =>
                        statusMutation.mutate(
                          {
                            id:
                              item._id,
                            status:
                              e
                                .target
                                .value,
                          }
                        )
                      }
                      className="
                      w-full
                      bg-[#0B1120]
                      border
                      border-gray-700
                      rounded-lg
                      px-3
                      py-3
                      text-white
                      "
                    >
                      <option value="new">
                        New
                      </option>

                      <option value="in-progress">
                        In Progress
                      </option>

                      <option value="resolved">
                        Resolved
                      </option>

                    </select>

                  </div>

                  <button
                    onClick={() =>
                      deleteMutation.mutate(
                        item._id
                      )
                    }
                    className="
                    w-full
                    mt-4
                    bg-red-600
                    hover:bg-red-700
                    py-3
                    rounded-lg
                    text-white
                    "
                  >
                    Delete Message
                  </button>

                </div>
              )
            )}

          </div>

          {filtered.length ===
            0 && (
            <div
              className="
              text-center
              py-16
              text-gray-400
              "
            >
              No messages found
            </div>
          )}

        </>
      )}

    </AdminLayout>
  );
};

export default Messages;