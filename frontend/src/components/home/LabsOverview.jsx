import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";

const labs = [
  {
    title: "AI Lab",
    desc: "Machine Learning & Computer Vision"
  },
  {
    title: "Drone Lab",
    desc: "Autonomous Drone Systems"
  },
  {
    title: "AR/VR Lab",
    desc: "Immersive Simulations"
  },
  {
    title: "Mechatronics Lab",
    desc: "Robotics & Automation"
  }
];

const LabsOverview = () => {
  return (
    <section className="py-24 bg-[#111827]">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader
          title="Research Labs"
          subtitle="Advanced technology divisions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {labs.map((lab) => (
            <motion.div
              key={lab.title}
              whileHover={{
                scale: 1.05
              }}
              className="bg-[#1F2937] p-6 rounded-xl"
            >
              <h3 className="text-white text-xl font-bold">
                {lab.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {lab.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default LabsOverview;