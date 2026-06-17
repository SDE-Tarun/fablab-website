const TeamCard = ({
  member,
  onClick,
}) => {
  return (
    <div
      onClick={() =>
        onClick(member)
      }
      className="bg-[#111827] rounded-xl p-6 cursor-pointer"
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 rounded-full mx-auto object-cover"
      />

      <h3 className="text-white text-center text-xl font-bold mt-4">
        {member.name}
      </h3>

      <p className="text-gray-400 text-center">
        {
          member.designation
        }
      </p>
    </div>
  );
};

export default TeamCard;