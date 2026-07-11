
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SendHorizontal, Bot } from 'lucide-react';

const ChatbotCard = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{type: 'bot' | 'user', text: string}>>([
    { type: 'bot', text: 'Hello! How can I help you with your health queries today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message to chat
    const userMessage = message;
    setChatHistory(prev => [...prev, { type: 'user', text: userMessage }]);
    setMessage('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate response after delay
    setTimeout(() => {
      const botResponses = [
        "I recommend consulting with a specialist for this concern. Would you like me to help you book an appointment?",
        "Based on your symptoms, it could be a few different things. Let me provide some general information.",
        "That's a common health question. Here's what medical research suggests.",
        "I can provide some guidance on this, but please remember I'm just an AI assistant and not a replacement for medical advice.",
        "For more personalized health recommendations, please consider upgrading to our Premium plan."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      setChatHistory(prev => [...prev, { type: 'bot', text: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <Bot className="h-5 w-5 mr-2 text-primary" />
          AI Health Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {chatHistory.map((chat, index) => (
            <div 
              key={index} 
              className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  chat.type === 'user' 
                    ? 'bg-primary text-white' 
                    : 'bg-muted'
                }`}
              >
                <p className="text-sm">{chat.text}</p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-muted max-w-[80%] rounded-lg px-4 py-2">
                <div className="flex space-x-2">
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <Input 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your health question..."
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={!message.trim()}>
            <SendHorizontal className="h-4 w-4" />
          </Button>
        </form>
        
        <div className="mt-4">
          <p className="text-xs text-center text-muted-foreground">
            Upgrade to Premium for personalized AI health recommendations
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatbotCard;
