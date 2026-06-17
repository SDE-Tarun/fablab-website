import {
  Link,
} from "react-router-dom";

const OrganogramPreview =
  () => {
    return (
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-[#111827] rounded-xl p-10">

            <h2 className="text-white text-4xl font-bold">

              Organisation Structure

            </h2>

            <p className="text-gray-400 mt-4">

              View complete leadership,
              research and engineering hierarchy.

            </p>

            <Link
              to="/organogram"
              className="
              inline-block
              mt-6
              px-6
              py-3
              bg-blue-600
              rounded-lg
              text-white
              "
            >
              View Organogram
            </Link>

          </div>

        </div>

      </section>
    );
  };

export default OrganogramPreview;