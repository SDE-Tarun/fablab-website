import { useEffect, useState } from "react";

import { getTeam } from "../api/teamApi";

import TeamCard from "../components/team/TeamCard";
import TeamModal from "../components/team/TeamModal";

const Team = () => {
  const [members, setMembers] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const res = await getTeam();

      // SAFE: ensure array always
      setMembers(Array.isArray(res) ? res : []);
    } catch (error) {
      console.log("Team fetch error:", error);
      setMembers([]);
    }
  };

  const leadership = (members || []).filter(
    (member) => member.category === "leadership"
  );

  const research = (members || []).filter(
    (member) => member.category === "research"
  );

  const engineering = (members || []).filter(
    (member) => member.category === "engineering"
  );

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-white text-5xl font-bold mb-12">
          Our Team
        </h1>

        {/* Leadership */}
        <h2 className="text-blue-500 text-3xl mb-8">
          Leadership
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {leadership.length > 0 ? (
            leadership.map((member) => (
              <TeamCard
                key={member._id}
                member={member}
                onClick={setSelected}
              />
            ))
          ) : (
            <p className="text-gray-400 col-span-full">
              No leadership members found
            </p>
          )}
        </div>

        {/* Research */}
        <h2 className="text-blue-500 text-3xl mt-16 mb-8">
          Research Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {research.length > 0 ? (
            research.map((member) => (
              <TeamCard
                key={member._id}
                member={member}
                onClick={setSelected}
              />
            ))
          ) : (
            <p className="text-gray-400 col-span-full">
              No research members found
            </p>
          )}
        </div>

        {/* Engineering */}
        <h2 className="text-blue-500 text-3xl mt-16 mb-8">
          Engineering Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {engineering.length > 0 ? (
            engineering.map((member) => (
              <TeamCard
                key={member._id}
                member={member}
                onClick={setSelected}
              />
            ))
          ) : (
            <p className="text-gray-400 col-span-full">
              No engineering members found
            </p>
          )}
        </div>

      </div>

      <TeamModal
        member={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
};

export default Team;