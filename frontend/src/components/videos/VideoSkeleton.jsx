const VideoSkeleton = () => {
  return (
    <div
      className="
      bg-[#111827]
      rounded-xl
      overflow-hidden
      animate-pulse
      "
    >
      <div className="h-56 bg-gray-700"></div>

      <div className="p-5">
        <div className="h-6 bg-gray-700 rounded mb-3"></div>

        <div className="h-4 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default VideoSkeleton;