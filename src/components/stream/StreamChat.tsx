import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

export type StreamChatProps = {
  streamId: string;
};

export const StreamChat = ({ streamId }: StreamChatProps) => {
  return (
    <div className="h-full flex flex-col bg-card rounded-lg p-4">
      <div className="font-semibold mb-4">Stream Chat</div>
      <ScrollArea className="flex-1 mb-4">
        <div className="space-y-4">
          {/* Example messages */}
          <div className="text-sm">
            <span className="font-medium">User1:</span> Hello everyone!
          </div>
          <div className="text-sm">
            <span className="font-medium">User2:</span> Hi there!
          </div>
        </div>
      </ScrollArea>
      <div className="flex gap-2">
        <Input placeholder="Type a message..." />
        <Button>Send</Button>
      </div>
    </div>
  );
};
