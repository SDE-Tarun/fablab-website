const stats = [
  { value: "10+", label: "Research Projects" },
  { value: "4", label: "Labs" },
  { value: "20+", label: "Innovators" },
  { value: "100+", label: "Experiments" }
];

const Statistics = () => {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item) => (
            <div
              key={item.label}
              className="text-center"
            >
              <h2 className="text-blue-500 text-5xl font-bold">
                {item.value}
              </h2>

              <p className="text-gray-400 mt-2">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Statistics;