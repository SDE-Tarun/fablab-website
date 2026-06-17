import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";

const MissionVision = () => {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader
          title="Mission & Vision"
          subtitle="Building next generation technologies."
        />

        <div className="grid md:grid-cols-2 gap-8">

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#111827] p-8 rounded-xl"
          >
            <h3 className="text-white text-2xl font-bold mb-4">
              Mission
            </h3>

            <p className="text-gray-400">
              Develop cutting-edge solutions in
              AI, Drones, AR/VR and Mechatronics.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#111827] p-8 rounded-xl"
          >
            <h3 className="text-white text-2xl font-bold mb-4">
              Vision
            </h3>

            <p className="text-gray-400">
              Become a leading innovation hub
              driving future defence and research.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default MissionVision;