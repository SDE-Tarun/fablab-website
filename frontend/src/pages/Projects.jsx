import { useEffect, useState } from "react";
import { getProjects } from "../api/projectApi";
import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await getProjects();

      // safety check (IMPORTANT)
      setProjects(Array.isArray(res) ? res : []);
      
    } catch (error) {
      console.log(error);
      setProjects([]);
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-white text-5xl font-bold mb-12">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;