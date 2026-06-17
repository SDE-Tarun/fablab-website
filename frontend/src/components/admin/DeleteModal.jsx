const DeleteModal = ({
  open,
  onClose,
  onConfirm,
  loading,
}) => {

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
        w-full
        max-w-md
        bg-[#111827]
        border
        border-red-900
        rounded-2xl
        shadow-2xl
        p-6
        "
      >

        <h2
          className="
          text-red-400
          text-2xl
          font-bold
          mb-4
          "
        >
          Delete Record
        </h2>

        <p
          className="
          text-gray-300
          "
        >
          This action cannot be
          undone.
        </p>

        <p
          className="
          text-gray-500
          mt-2
          "
        >
          Are you sure you want
          to permanently delete
          this item?
        </p>

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
            onClick={onConfirm}
            disabled={loading}
            className="
            px-5
            py-3
            rounded-xl
            bg-red-600
            hover:bg-red-700
            text-white
            font-semibold
            disabled:opacity-50
            "
          >
            {loading
              ? "Deleting..."
              : "Delete"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default DeleteModal;