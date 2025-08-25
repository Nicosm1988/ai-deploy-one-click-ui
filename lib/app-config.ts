import type { AIModelKey } from './ai-models';

export const appConfig: {
    name: string;
    shortDescription: string;
    extendedDescription: string;
    aiModel: AIModelKey;
    systemPrompt: string;
    appUrl: string;
    gitHubSource: string;
} = {
    "name": "ai-deploy-one-click UI",
    "shortDescription": "An AI chatbot",
    "extendedDescription": "User interface for an AI chatbot",
    "aiModel": "Gemini 2.5 Pro",
    "systemPrompt": "You are a helpful assistant.",
    "appUrl": "https://github.com/AstraBert/ai-deploy-one-click-ui",
    "gitHubSource": "AstraBert/ai-deploy-one-click-ui"
};
