import { motion } from "framer-motion";
import Button from "../common/Button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/videos/drone.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">

              Future Defence &
              Innovation Research

            </h1>

            <p className="mt-6 text-gray-300 text-xl max-w-3xl">

              AI • Drone Technology • AR/VR •
              Mechatronics • Advanced Research

            </p>

            <div className="mt-8 flex gap-4">

              <Button>
                Explore Labs
              </Button>

              <Button className="bg-transparent border border-white">
                View Projects
              </Button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;