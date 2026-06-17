import { motion } from "framer-motion";

const StatCard = ({
  title,
  value,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="
      bg-[#111827]
      border
      border-gray-800
      rounded-2xl
      p-6
      shadow-lg
      "
    >
      <h3
        className="
        text-gray-400
        text-sm
        mb-2
        "
      >
        {title}
      </h3>

      <h2
        className="
        text-white
        text-4xl
        font-bold
        "
      >
        {value}
      </h2>
    </motion.div>
  );
};

export default StatCard;