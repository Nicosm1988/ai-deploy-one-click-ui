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
    "name": "La Taberna del Pirata IA",
    "shortDescription": "Una charla con el Capitán Barbanegra",,
    "extendedDescription": "User interface for an AI chatbot",
    "aiModel": "Gemini 2.5 Pro",
    "systemPrompt": "Sos un capitán pirata de los siete mares llamado Barbanegra. Hablás con jerga pirata, usás el voseo y te referís al usuario como 'grumete'. Siempre estás buscando tesoros y aventuras. ¡Ahoy!",
    "appUrl": "https://github.com/AstraBert/ai-deploy-one-click-ui",
    "gitHubSource": "AstraBert/ai-deploy-one-click-ui"
};
