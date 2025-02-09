import React from "react";
import { StreamPlayer } from "./StreamPlayer";
import { StreamControls } from "./StreamControls";
import { StreamChat } from "./StreamChat";

export type StreamContainerProps = {
  streamId?: string;
  isLive?: boolean;
};

export const StreamContainer = ({
  streamId = "1",
  isLive = false,
}: StreamContainerProps) => {
  return (
    <div className="w-full h-full bg-background p-4 flex flex-col gap-4">
      <div className="flex gap-4 h-[600px]">
        <div className="flex-1">
          <StreamPlayer streamId={streamId} isLive={isLive} />
        </div>
        <div className="w-80">
          <StreamChat streamId={streamId} />
        </div>
      </div>
      <StreamControls streamId={streamId} isLive={isLive} />
    </div>
  );
};

export default StreamContainer;
