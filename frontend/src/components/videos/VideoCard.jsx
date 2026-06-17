const VideoCard = ({
  video,
  onOpen,
}) => {
  return (
    <div
      onClick={() =>
        onOpen(video)
      }
      className="
      bg-[#111827]
      rounded-xl
      overflow-hidden
      cursor-pointer
      hover:scale-[1.02]
      transition
      "
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        loading="lazy"
        className="
        w-full
        h-56
        object-cover
        "
      />

      <div className="p-5">

        <span
          className="
          text-xs
          text-blue-400
          uppercase
          "
        >
          {video.category}
        </span>

        <h3
          className="
          text-white
          text-xl
          font-bold
          mt-2
          "
        >
          {video.title}
        </h3>

        <p
          className="
          text-gray-400
          mt-2
          "
        >
          {video.description}
        </p>

      </div>
    </div>
  );
};

export default VideoCard;