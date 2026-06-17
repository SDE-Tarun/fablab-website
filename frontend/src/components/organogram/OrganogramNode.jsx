const OrganogramNode = ({
  data,
}) => {
  return (
    <div
      className="
      bg-[#111827]
      border
      border-blue-500
      rounded-xl
      p-4
      min-w-[220px]
      shadow-lg
      "
    >
      {data.image && (
        <img
          src={data.image}
          alt={data.name}
          className="
          w-16
          h-16
          rounded-full
          mx-auto
          object-cover
          "
        />
      )}

      <h3
        className="
        text-white
        text-center
        font-bold
        mt-3
        "
      >
        {data.name}
      </h3>

      <p
        className="
        text-blue-400
        text-center
        text-sm
        "
      >
        {data.designation}
      </p>
    </div>
  );
};

export default OrganogramNode;