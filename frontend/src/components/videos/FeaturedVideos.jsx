import {
  useEffect,
  useState,
} from "react";

import {
  getFeaturedVideos,
} from "../../api/videosApi";

import VideoCard from "./VideoCard";

const FeaturedVideos = () => {
  const [videos, setVideos] =
    useState([]);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos =
    async () => {
      const res =
        await getFeaturedVideos();

      setVideos(
        res.data.data
      );
    };

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2
          className="
          text-white
          text-4xl
          font-bold
          mb-10
          "
        >
          Featured Videos
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          gap-8
          "
        >
          {videos.map(
            (video) => (
              <VideoCard
                key={
                  video._id
                }
                video={
                  video
                }
                onOpen={() => {}}
              />
            )
          )}
        </div>

      </div>

    </section>
  );
};

export default FeaturedVideos;