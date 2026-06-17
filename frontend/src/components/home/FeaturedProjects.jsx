import SectionHeader from "../common/SectionHeader";

const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-[#111827]">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader
          title="Featured Projects"
          subtitle="Ongoing innovation initiatives."
        />

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#1F2937] rounded-xl p-6">
            <h3 className="text-white text-xl font-bold">
              Interceptor Drone AI
            </h3>

            <p className="text-gray-400 mt-3">
              Intelligent tracking system.
            </p>
          </div>

          <div className="bg-[#1F2937] rounded-xl p-6">
            <h3 className="text-white text-xl font-bold">
              AR Training Simulation
            </h3>

            <p className="text-gray-400 mt-3">
              Interactive defence simulation.
            </p>
          </div>

          <div className="bg-[#1F2937] rounded-xl p-6">
            <h3 className="text-white text-xl font-bold">
              Robotics Automation
            </h3>

            <p className="text-gray-400 mt-3">
              Smart robotic workflows.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default FeaturedProjects;