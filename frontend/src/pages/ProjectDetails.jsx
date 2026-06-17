import {
  useParams,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import {
  getProjects,
} from "../api/projectApi";

const ProjectDetails =
  () => {
    const { slug } =
      useParams();

    const [
      project,
      setProject,
    ] = useState(null);

    useEffect(() => {
      fetchProject();
    }, [slug]);

    const fetchProject =
      async () => {
        const res =
          await getProject(
            slug
          );

        setProject(
          res.data.data
        );
      };

    if (!project)
      return (
        <h1>
          Loading...
        </h1>
      );

    return (
      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <img
            src={
              project.image
            }
            alt={
              project.title
            }
            className="rounded-xl"
          />

          <h1 className="text-white text-5xl font-bold mt-8">

            {
              project.title
            }

          </h1>

          <p className="text-gray-400 mt-6">

            {
              project.description
            }

          </p>

        </div>

      </section>
    );
  };

export default ProjectDetails;