import {
  useEffect,
  useState,
} from "react";

import {
  getOrganogram,
} from "../api/organogramApi";

import OrganogramFlow from "../components/organogram/OrganogramFlow";

const Organogram =
  () => {
    const [nodes, setNodes] =
      useState([]);

    const [
      loading,
      setLoading,
    ] = useState(true);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData =
      async () => {
        try {
          const res =
            await getOrganogram();

          setNodes(
            res.data.data
          );
        } catch (
          error
        ) {
          console.log(
            error
          );
        } finally {
          setLoading(
            false
          );
        }
      };

    if (loading)
      return (
        <div className="text-center py-20 text-white">
          Loading...
        </div>
      );

    return (
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-white text-5xl font-bold mb-12">

            Organisation Structure

          </h1>

          <OrganogramFlow
            members={
              nodes
            }
          />

        </div>

      </section>
    );
  };

export default Organogram;