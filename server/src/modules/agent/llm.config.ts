import { ChatOpenAI } from "@langchain/openai";

export enum LLMProvider {
  ZHIPU = "zhipu",
  DEEPSEEK = "deepseek",
}

interface LLMConfig {
  apiKey: string;
  model: string;
  baseURL: string;
  temperature?: number;
  maxTokens?: number;
  timeout?: number;
}

const LLM_CONFIGS: Record<LLMProvider, LLMConfig> = {
  [LLMProvider.ZHIPU]: {
    // TODO 你需要自己申请并替换自己的 api-key，下面给出智谱和 DeepSeek 两种模型接入，可取对应的官网充值创建自己的 api-key
    apiKey: "c9b787fe41334a2cb6e0739223e33579.sBWNUYSOcNH0L9zq",
    model: "glm-4.7-flash",
    baseURL: "https://open.bigmodel.cn/api/paas/v4",
    temperature: 0.1,
    maxTokens: 2048,
    timeout: 60000,
  },
  [LLMProvider.DEEPSEEK]: {
    apiKey: "sk-239167e222ad438e941948d5ac19b39e",
    model: "deepseek-chat",
    baseURL: "https://api.deepseek.com",
    temperature: 0.1,
    maxTokens: 2048,
    timeout: 60000,
  },
};

export function createLLMModel(provider: LLMProvider): ChatOpenAI {
  const config = LLM_CONFIGS[provider];

  return new ChatOpenAI({
    apiKey: config.apiKey,
    model: config.model,
    temperature: config.temperature,
    maxTokens: config.maxTokens,
    timeout: config.timeout,
    streaming: true,
    streamUsage: true,
    useResponsesApi: false,
    configuration: {
      baseURL: config.baseURL,
    },
  });
}

export function getModelName(provider: LLMProvider): string {
  return LLM_CONFIGS[provider].model;
}
