import {
  Link,
} from "react-router-dom";

const LabCard = ({
  lab,
}) => {
  return (
    <div className="bg-[#111827] rounded-xl overflow-hidden">

      <img
        src={lab.image}
        alt={lab.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-white text-2xl font-bold">

          {lab.name}

        </h3>

        <p className="text-gray-400 mt-3">

          {
            lab.shortDescription
          }

        </p>

        <Link
          to={`/labs/${lab.slug}`}
          className="text-blue-500 mt-4 inline-block"
        >
          Explore →
        </Link>

      </div>

    </div>
  );
};

export default LabCard;