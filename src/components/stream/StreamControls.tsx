import React from "react";
import { Button } from "../ui/button";
import { Settings, Mic, Video, Share2 } from "lucide-react";

export type StreamControlsProps = {
  streamId: string;
  isLive?: boolean;
};

export const StreamControls = ({
  streamId,
  isLive = false,
}: StreamControlsProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-card rounded-lg">
      <div className="flex gap-2">
        <Button variant="outline" size="icon">
          <Mic className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Video className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
      <Button variant={isLive ? "destructive" : "default"}>
        {isLive ? "End Stream" : "Go Live"}
      </Button>
      <Button variant="outline" size="icon">
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  );
};
