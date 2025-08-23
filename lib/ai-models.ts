import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { google } from '@ai-sdk/google';

export const aiModels = {
    "GPT 4.1": openai("gpt-4.1"),
    "GPT 4o": openai("gpt-4o"),
    "GPT 5": openai("gpt-5"),
    "Claude Sonnet 3.5": anthropic("claude-3-5-sonnet-latest"),
    "Claude Sonnet 3.7": anthropic("claude-3-7-sonnet-20250219"),
    "Claude Sonnet 4": anthropic("claude-sonnet-4-20250514"),
    "Gemini 2 Flash": google("gemini-2.0-flash"),
    "Gemini 2.5 Flash": google("gemini-2.5-flash"),
    "Gemini 2.5 Pro": google("gemini-2.5-pro")
} as const;

export type AIModelKey = keyof typeof aiModels;