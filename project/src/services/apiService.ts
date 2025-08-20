// OpenRouter API service for LearnerBot
export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ApiResponse {
  message: string;
  error?: string;
}

class OpenRouterApiService {
  private apiKey: string;
  private baseUrl: string = 'https://openrouter.ai/api/v1';
  private siteUrl: string;
  private siteName: string;

  constructor() {
    this.apiKey = import.meta.env.VITE_OPENROUTER_API_KEY || '';
    this.siteUrl = import.meta.env.VITE_SITE_URL || 'https://learnerbot.ai';
    this.siteName = import.meta.env.VITE_SITE_NAME || 'LearnerBot AI Assistant';
    
    if (!this.apiKey) {
      console.warn('OpenRouter API key not found. Please set VITE_OPENROUTER_API_KEY in your .env file');
    }
  }

  async sendMessage(message: string, conversationHistory: ChatMessage[] = []): Promise<ApiResponse> {
    if (!this.apiKey) {
      return {
        message: `I'd love to help you learn, but I need an API key to connect to my brain! 🧠 

Please add your OpenRouter API key to the .env file:
1. Copy .env.example to .env
2. Add your OpenRouter API key
3. Restart the development server

Don't worry - once that's set up, we'll have amazing learning adventures together! 🚀`,
        error: 'API key not configured'
      };
    }

    try {
      const messages: ChatMessage[] = [
        {
          role: 'system',
          content: `You are LearnerBot, an enthusiastic AI learning assistant designed specifically for young learners aged 10-15. Your mission is to make learning fun, engaging, and accessible.

Your personality:
- Super friendly and encouraging, like a cool older sibling
- Use emojis and fun language to keep things exciting
- Patient and supportive - never make anyone feel bad for not knowing something
- Curious and enthusiastic about everything
- Always positive and motivating

Your teaching style:
- Break complex topics into simple, digestible pieces
- Use analogies and real-world examples kids can relate to
- Ask follow-up questions to keep them engaged
- Celebrate their curiosity and progress
- Make learning feel like an adventure, not work

Your capabilities:
- Help with homework across all subjects
- Explain science, math, history, languages, and more
- Provide step-by-step guidance
- Create fun learning activities and quizzes
- Adapt explanations to their level of understanding
- Encourage critical thinking and curiosity

Always format responses with markdown for better readability. Keep responses engaging but not too long - attention spans vary!`
        },
        ...conversationHistory,
        {
          role: 'user',
          content: message
        }
      ];

      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'HTTP-Referer': this.siteUrl,
          'X-Title': this.siteName,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'openai/gpt-4o',
          messages: messages,
          max_tokens: 1500,
          temperature: 0.7,
          top_p: 0.9,
          frequency_penalty: 0.1,
          presence_penalty: 0.1,
          stream: false
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `OpenRouter API request failed with status ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('Invalid response format from OpenRouter API');
      }

      return {
        message: data.choices[0].message.content.trim()
      };

    } catch (error) {
      console.error('OpenRouter API Error:', error);
      
      if (error instanceof Error) {
        return {
          message: '',
          error: error.message
        };
      }
      
      return {
        message: '',
        error: 'An unexpected error occurred while communicating with the OpenRouter API'
      };
    }
  }

  // Get available models
  async getAvailableModels(): Promise<any[]> {
    try {
      const response = await fetch(`${this.baseUrl}/models`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch models');
      }

      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching models:', error);
      return [];
    }
  }
}

export const apiService = new OpenRouterApiService();