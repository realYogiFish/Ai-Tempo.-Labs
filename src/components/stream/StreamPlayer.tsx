import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";

export type StreamPlayerProps = {
  streamId: string;
  isLive?: boolean;
};

export const StreamPlayer = ({
  streamId,
  isLive = false,
}: StreamPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        controls
        playsInline
      />
      {!isLive && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Button variant="secondary" size="lg">
            Start Stream
          </Button>
        </div>
      )}
    </div>
  );
};
