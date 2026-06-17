import {
  useEffect,
  useState,
} from "react";

import {
  getLabs,
} from "../api/labApi";

import LabCard from "../components/labs/LabCard";

const Labs = () => {
  const [labs, setLabs] =
    useState([]);

  useEffect(() => {
    fetchLabs();
  }, []);

  const fetchLabs =
    async () => {
      try {
        const res =
          await getLabs();

        setLabs(
          res.data.data
        );
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-white text-5xl font-bold mb-12">

          Research Labs

        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {labs.map((lab) => (
            <LabCard
              key={lab._id}
              lab={lab}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Labs;
