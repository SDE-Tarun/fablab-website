import {
  useParams,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import {
  getLab,
} from "../api/labApi";

const LabDetails = () => {
  const { slug } =
    useParams();

  const [lab, setLab] =
    useState(null);

  useEffect(() => {
    fetchLab();
  }, [slug]);

  const fetchLab =
    async () => {
      const res =
        await getLab(slug);

      setLab(
        res.data.data
      );
    };

  if (!lab)
    return (
      <h1>
        Loading...
      </h1>
    );

  return (
    <section className="py-24">

      <div className="max-w-5xl mx-auto px-6">

        <img
          src={lab.image}
          alt={lab.name}
          className="w-full rounded-xl"
        />

        <h1 className="text-white text-5xl font-bold mt-8">

          {lab.name}

        </h1>

        <p className="text-gray-400 mt-6">

          {lab.description}

        </p>

      </div>

    </section>
  );
};

export default LabDetails;