import { useEffect, useState } from "react";

import { getVideos } from "../api/videosApi";

import VideoCard from "../components/videos/VideoCard";
import VideoModal from "../components/videos/VideoModal";
import VideoFilters from "../components/videos/VideoFilters";
import VideoSkeleton from "../components/videos/VideoSkeleton";

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await getVideos();

      // SAFE: always ensure array
      setVideos(Array.isArray(res) ? res : []);
    } catch (error) {
      console.log("Video fetch error:", error);
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredVideos = (videos || []).filter((video) => {
    const searchMatch = video?.title
      ?.toLowerCase()
      ?.includes(search.toLowerCase());

    const categoryMatch =
      !category || video?.category === category;

    return searchMatch && categoryMatch;
  });

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-white text-5xl font-bold mb-10">
          Video Gallery
        </h1>

        <VideoFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array(6)
              .fill(0)
              .map((_, i) => <VideoSkeleton key={i} />)
          ) : filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <VideoCard
                key={video._id}
                video={video}
                onOpen={setSelected}
              />
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              No videos found
            </p>
          )}
        </div>

      </div>

      <VideoModal
        video={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
};

export default VideoGallery;