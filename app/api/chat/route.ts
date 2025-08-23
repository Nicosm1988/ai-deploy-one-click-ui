import { appConfig } from "@/lib/app-config";
import { aiModels } from "@/lib/ai-models";
import {
  streamText,
  UIMessage,
  convertToModelMessages,
} from "ai";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const result = streamText({
    model: aiModels[appConfig.aiModel],
    messages: convertToModelMessages(messages),
    system: appConfig.systemPrompt,
  });

  return result.toUIMessageStreamResponse();
}
