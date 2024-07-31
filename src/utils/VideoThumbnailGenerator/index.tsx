import { Image } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

interface VideoThumbnailGeneratorProps {
  videoUrl: string;
}

const VideoThumbnailGenerator: React.FC<VideoThumbnailGeneratorProps> = ({
  videoUrl,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const captureThumbnail = () => {
    const video = videoRef.current;
    if (video) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (context) {
        // Set the canvas size to the video size
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Draw the video frame onto the canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Convert the canvas to a data URL (base64 encoded image)
        const thumbnailUrl = canvas.toDataURL("image/png");
        setThumbnail(thumbnailUrl);
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadeddata", captureThumbnail);

      // Clean up event listener
      return () => {
        video.removeEventListener("loadeddata", captureThumbnail);
      };
    }
  }, []);

  return (
    <div>
      {thumbnail ? (
        <Image
          src={thumbnail}
          w={{ base: "250px", md: "70%" }}
          aspectRatio={1 / 1}
          objectFit={"cover"}
          objectPosition={"center"}
          alt="Video thumbnail"
        />
      ) : (
        <p>Loading thumbnail...</p>
      )}
      {/* Hidden video element to load the video and capture the thumbnail */}
      <video ref={videoRef} src={videoUrl} style={{ display: "none" }} />
    </div>
  );
};

export default VideoThumbnailGenerator;
