import Anthropic from '@anthropic-ai/sdk';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

// Initialize the Anthropic client
const anthropicClient = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: {
      invoke: async ({ prompt }) => {
        const response = await anthropicClient.messages.create({
          model: apiIdentifier,
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 4096,
        });
        return response.content[0].text;
      }
    },
    middleware: customMiddleware,
  });
};