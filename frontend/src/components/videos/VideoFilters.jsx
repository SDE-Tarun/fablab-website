const VideoFilters = ({
  search,
  setSearch,
  category,
  setCategory,
}) => {
  return (
    <div
      className="
      flex
      flex-col
      md:flex-row
      gap-4
      mb-10
      "
    >
      <input
        type="text"
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        placeholder="Search videos..."
        className="
        flex-1
        px-4
        py-3
        rounded-lg
        "
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(
            e.target.value
          )
        }
        className="
        px-4
        py-3
        rounded-lg
        "
      >
        <option value="">
          All Categories
        </option>

        <option value="drone">
          Drone
        </option>

        <option value="ai">
          AI
        </option>

        <option value="ar-vr">
          AR / VR
        </option>

        <option value="mechatronics">
          Mechatronics
        </option>

      </select>
    </div>
  );
};

export default VideoFilters;