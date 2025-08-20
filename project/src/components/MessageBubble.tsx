import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Bot, User } from 'lucide-react';
import type { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
  onOptionClick?: (option: string) => void;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, onOptionClick }) => {
  const isUser = message.type === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-3 duration-500`}>
      <div className={`flex max-w-[90%] md:max-w-[75%] ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start space-x-4 space-x-reverse`}>
        {/* Avatar */}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${
          isUser 
            ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500' 
            : 'bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400'
        }`}>
          {isUser ? (
            <User className="w-5 h-5 text-white" />
          ) : (
            <Bot className="w-5 h-5 text-white" />
          )}
        </div>

        {/* Message Content */}
        <div className={`relative px-5 py-4 rounded-2xl ${
          isUser 
            ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white rounded-br-md shadow-blue-500/20' 
            : 'bg-gray-800/90 text-gray-100 rounded-bl-md border border-gray-700/60 shadow-purple-500/10'
        } shadow-xl backdrop-blur-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]`}>
          {isUser ? (
            <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">{message.content}</p>
          ) : (
            <div className="prose prose-invert prose-sm max-w-none prose-headings:text-purple-300 prose-strong:text-blue-300 prose-em:text-cyan-300">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code: ({ node, className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || '');
                    return match ? (
                      <pre className="bg-gray-900/90 rounded-lg p-4 overflow-x-auto border border-gray-600/40 shadow-inner">
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    ) : (
                      <code className="bg-gray-700/60 px-2 py-1 rounded text-cyan-300 font-medium" {...props}>
                        {children}
                      </code>
                    );
                  },
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-purple-400 pl-4 italic text-gray-300 bg-gray-800/40 py-3 rounded-r">
                      {children}
                    </blockquote>
                  ),
                  h1: ({ children }) => <h1 className="text-xl font-bold text-purple-300 mb-3">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-lg font-bold text-purple-300 mb-2">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-base font-bold text-purple-300 mb-2">{children}</h3>,
                  strong: ({ children }) => <strong className="text-blue-300 font-bold">{children}</strong>,
                  em: ({ children }) => <em className="text-cyan-300">{children}</em>,
                  ul: ({ children }) => <ul className="list-disc pl-5 space-y-1">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal pl-5 space-y-1">{children}</ol>,
                  li: ({ children }) => <li className="text-gray-200">{children}</li>,
                  p: ({ children }) => <p className="leading-relaxed mb-3 last:mb-0">{children}</p>,
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          )}

          {/* Quick Reply Options */}
          {message.options && message.options.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {message.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onOptionClick?.(option)}
                  className="px-3 py-2 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 hover:border-purple-400/50 rounded-lg text-sm text-purple-300 hover:text-purple-200 transition-all duration-300 hover:scale-105"
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {/* Timestamp */}
          <div className={`text-xs mt-3 opacity-75 ${
            isUser ? 'text-blue-100' : 'text-gray-400'
          }`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>

          {/* Message tail */}
          <div className={`absolute top-4 w-3 h-3 ${
            isUser 
              ? 'right-0 translate-x-1 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600' 
              : 'left-0 -translate-x-1 bg-gray-800/90 border-l border-t border-gray-700/60'
          } rotate-45`}></div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;