import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";


interface YouTubeVideo {
  videoId: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

export default function YouTubeGallery({ channelId, apiKey }: { channelId: string; apiKey: string; }) {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const BASE_URL = "https://www.googleapis.com/youtube/v3";

  async function fetchAllVideos() {
    try {
      const channelRes = await axios.get(`${BASE_URL}/channels`, {
        params: { key: apiKey, id: channelId, part: "contentDetails" },
      });

      const uploadsPlaylistId = channelRes.data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
      if (!uploadsPlaylistId) return;

      let nextPageToken: string | undefined = undefined;
      const allVideos: YouTubeVideo[] = [];

      do {
        const playlistRes = await axios.get(`${BASE_URL}/playlistItems`, {
          params: {
            key: apiKey,
            playlistId: uploadsPlaylistId,
            part: "snippet",
            maxResults: 50,
            pageToken: nextPageToken,
          },
        });

        playlistRes.data.items.forEach((item: any) => {
          const v = item.snippet;
          allVideos.push({
            videoId: v.resourceId.videoId,
            title: v.title,
            thumbnail: v.thumbnails.high.url,
            publishedAt: v.publishedAt,
          });
        });

        nextPageToken = playlistRes.data.nextPageToken;
      } while (nextPageToken);

      setVideos(allVideos);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllVideos();
  }, []);

  return (
    <div className="w-full max-h-screen overflow-y-auto p-4">
      {loading ? (
        <div className="text-center text-lg font-medium">Loading videos...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videos.map((v, i) => (
            <motion.div
              key={v.videoId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow bg-white cursor-pointer hover:scale-[1.02] transition"
              onClick={() => setActiveVideo(v.videoId)}
            >
              <img src={v.thumbnail} className="w-full h-48 object-cover" />
              <div className="p-3 text-sm font-semibold line-clamp-2">{v.title}</div>
            </motion.div>
          ))}
        </div>
      )}

      {activeVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setActiveVideo(null)}>
          <div className="bg-white rounded-xl overflow-hidden max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}`}
              className="w-full h-[60vh]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="w-full py-3 bg-red-600 text-white text-lg font-semibold" onClick={() => setActiveVideo(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
