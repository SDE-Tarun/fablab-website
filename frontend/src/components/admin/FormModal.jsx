import {
  useState,
  useEffect,
} from "react";

const FormModal = ({
  open,
  onClose,
  onSubmit,
  initialData,
  fields,
}) => {

  const [form, setForm] =
    useState({});

  useEffect(() => {
    setForm(
      initialData || {}
    );
  }, [initialData]);

  if (!open) return null;

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/80
      backdrop-blur-sm
      flex
      items-center
      justify-center
      z-50
      p-4
      "
    >

      <div
        className="
        bg-[#111827]
        border
        border-gray-800
        rounded-2xl
        w-full
        max-w-2xl
        shadow-2xl
        "
      >

        <div
          className="
          p-6
          border-b
          border-gray-800
          "
        >
          <h2
            className="
            text-white
            text-2xl
            font-bold
            "
          >
            {initialData
              ? "Edit Record"
              : "Create Record"}
          </h2>
        </div>

        <div className="p-6">

          <div className="grid gap-4">

            {fields.map((field) => (
              <div key={field.key}>

                <label
                  className="
                  block
                  text-gray-300
                  mb-2
                  "
                >
                  {field.label}
                </label>

                <input
                  value={
                    form[field.key] ||
                    ""
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      [field.key]:
                        e.target.value,
                    })
                  }
                  className="
                  w-full
                  p-3
                  rounded-xl
                  bg-[#0B1120]
                  border
                  border-gray-700
                  text-white
                  outline-none
                  focus:border-green-500
                  "
                />
              </div>
            ))}

          </div>

          <div
            className="
            flex
            justify-end
            gap-3
            mt-8
            "
          >

            <button
              onClick={onClose}
              className="
              px-5
              py-3
              rounded-xl
              bg-gray-700
              text-white
              "
            >
              Cancel
            </button>

            <button
              onClick={() =>
                onSubmit(form)
              }
              className="
              px-5
              py-3
              rounded-xl
              bg-green-600
              hover:bg-green-700
              text-white
              font-semibold
              "
            >
              Save
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FormModal;