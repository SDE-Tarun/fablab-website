const TeamModal = ({
  member,
  onClose,
}) => {
  if (!member) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">

      <div className="bg-[#111827] p-8 rounded-xl max-w-lg w-full">

        <button
          onClick={onClose}
          className="text-white float-right"
        >
          X
        </button>

        <img
          src={member.image}
          alt={member.name}
          className="w-40 h-40 rounded-full mx-auto"
        />

        <h2 className="text-white text-3xl font-bold text-center mt-4">

          {member.name}

        </h2>

        <p className="text-blue-400 text-center">

          {
            member.designation
          }

        </p>

        <p className="text-gray-400 mt-6">

          {member.bio}

        </p>

      </div>

    </div>
  );
};

export default TeamModal;