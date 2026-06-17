import { Link } from "react-router-dom";

const ProjectCard = ({
  project,
}) => {
  return (
    <div className="bg-[#111827] rounded-xl overflow-hidden">

      <img
        src={project.image}
        alt={project.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-white text-2xl font-bold">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-3">
          {
            project.shortDescription
          }
        </p>

        <Link
          to={`/projects/${project.slug}`}
          className="text-blue-500 mt-4 inline-block"
        >
          View Details →
        </Link>

      </div>

    </div>
  );
};

export default ProjectCard;