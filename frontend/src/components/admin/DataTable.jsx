const DataTable = ({
  columns,
  data,
  onEdit,
  onDelete,
}) => {
  return (
    <div
      className="
      overflow-x-auto
      rounded-2xl
      border
      border-gray-800
      "
    >
      <table className="w-full">

        <thead>
          <tr
            className="
            bg-[#0B1120]
            border-b
            border-gray-800
            "
          >
            {columns.map((col) => (
              <th
                key={col.key}
                className="
                p-4
                text-left
                text-gray-300
                font-semibold
                whitespace-nowrap
                "
              >
                {col.label}
              </th>
            ))}

            <th
              className="
              p-4
              text-left
              text-gray-300
              "
            >
              Actions
            </th>
          </tr>
        </thead>

        <tbody>

          {data?.length === 0 ? (
            <tr>
              <td
                colSpan={
                  columns.length + 1
                }
                className="
                text-center
                py-10
                text-gray-500
                "
              >
                No Records Found
              </td>
            </tr>
          ) : (
            data?.map((item) => (
              <tr
                key={item._id}
                className="
                border-b
                border-gray-800
                hover:bg-[#0F172A]
                transition
                "
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="
                    p-4
                    text-gray-200
                    "
                  >
                    {item[col.key]}
                  </td>
                ))}

                <td className="p-4">

                  <div className="flex gap-2">

                    <button
                      onClick={() =>
                        onEdit(item)
                      }
                      className="
                      px-4
                      py-2
                      rounded-lg
                      bg-blue-600
                      hover:bg-blue-700
                      text-white
                      text-sm
                      font-medium
                      transition
                      "
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        onDelete(item)
                      }
                      className="
                      px-4
                      py-2
                      rounded-lg
                      bg-red-600
                      hover:bg-red-700
                      text-white
                      text-sm
                      font-medium
                      transition
                      "
                    >
                      Delete
                    </button>

                  </div>

                </td>
              </tr>
            ))
          )}

        </tbody>

      </table>
    </div>
  );
};

export default DataTable;