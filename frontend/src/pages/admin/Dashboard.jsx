import { useQuery } from "@tanstack/react-query";

import AdminLayout from "../../components/admin/AdminLayout";

import StatCard from "../../components/admin/StatCard";

import {
  getDashboardStats,
} from "../../api/adminApi";

const Dashboard = () => {
  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: [
      "dashboard",
    ],
    queryFn:
      getDashboardStats,
  });

  return (
    <AdminLayout>

      <div className="mb-10">

        <h2
          className="
          text-white
          text-3xl
          font-bold
          "
        >
          Dashboard
        </h2>

        <p className="text-gray-400">
          Overview of FabLab
        </p>

      </div>

      {isLoading ? (
        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-5
          gap-6
          "
        >

          {[1, 2, 3, 4, 5].map(
            (item) => (
              <div
                key={item}
                className="
                h-36
                rounded-2xl
                bg-[#111827]
                animate-pulse
                "
              />
            )
          )}

        </div>
      ) : (
        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-5
          gap-6
          "
        >

          <StatCard
            title="Labs"
            value={data?.labs}
          />

          <StatCard
            title="Projects"
            value={
              data?.projects
            }
          />

          <StatCard
            title="Team"
            value={data?.team}
          />

          <StatCard
            title="Videos"
            value={
              data?.videos
            }
          />

          <StatCard
            title="Messages"
            value={
              data?.messages
            }
          />

        </div>
      )}

    </AdminLayout>
  );
};

export default Dashboard;