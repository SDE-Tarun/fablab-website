const VideoModal = ({
  video,
  onClose,
}) => {
  if (!video) return null;

  const youtubeId =
    video.videoUrl
      .split("v=")[1];

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/90
      flex
      items-center
      justify-center
      z-50
      p-4
      "
    >
      <div
        className="
        bg-[#111827]
        rounded-xl
        max-w-5xl
        w-full
        p-4
        "
      >
        <div className="flex justify-end">

          <button
            onClick={onClose}
            className="
            text-white
            text-2xl
            "
          >
            ×
          </button>

        </div>

        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={video.title}
          allowFullScreen
        />

      </div>
    </div>
  );
};

export default VideoModal;