"use client";

import { scrollToBottom, initialMessages, getSources } from "@/lib/utils";
import { ChatLine } from "./chat-line";
import {
  useChat,
  Message as StreamMessage,
} from "ai-stream-experimental/react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";
import { useEffect, useRef } from "react";
import { Message as UISDKMessage } from "@ai-sdk/ui-utils";

// Function to map UISDKMessage to StreamMessage
function mapMessages(uiSdkMessages: UISDKMessage[]): StreamMessage[] {
  return uiSdkMessages.map(({ id, role, content }) => ({
    id,
    role: role === "data" || role === "tool" ? "assistant" : role, // Map "data" or "tool" to "assistant"
    content,
  }));
}

export function Chat() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Map initialMessages to the correct format before passing them to useChat
  const { messages, input, handleInputChange, handleSubmit, isLoading, data } =
    useChat({
      initialMessages: mapMessages(initialMessages),
    });

  useEffect(() => {
    setTimeout(() => scrollToBottom(containerRef), 100);
  }, [messages]);

  return (
    <div className="flex h-[75vh] flex-col justify-between rounded-2xl border">
      <div className="overflow-auto p-6" ref={containerRef}>
        {messages.map(({ id, role, content }: StreamMessage, index) => (
          <ChatLine
            key={id}
            role={role}
            content={content}
            // Start from the third message of the assistant
            sources={data?.length ? getSources(data, role, index) : []}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="clear-both flex p-4">
        <Input
          value={input}
          placeholder={"Type to chat with AI..."}
          onChange={handleInputChange}
          className="mr-2"
        />

        <Button type="submit" className="w-24">
          {isLoading ? <Spinner /> : "Ask"}
        </Button>
      </form>
    </div>
  );
}
