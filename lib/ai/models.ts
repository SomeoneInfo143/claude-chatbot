// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'claude-3-opus',
    label: 'Claude 3 Opus',
    apiIdentifier: 'claude-3-opus-20240229',
    description: 'Most capable model for complex tasks, reasoning, and creative projects',
  },
  {
    id: 'claude-3-sonnet',
    label: 'Claude 3 Sonnet',
    apiIdentifier: 'claude-3-sonnet-20240229',
    description: 'Excellent balance of intelligence and speed for most tasks',
  },
  {
    id: 'claude-3-haiku',
    label: 'Claude 3 Haiku',
    apiIdentifier: 'claude-3-haiku-20240229',
    description: 'Fastest model, ideal for quick responses and simple tasks',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'claude-3-sonnet';