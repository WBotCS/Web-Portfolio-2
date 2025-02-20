import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Calendar } from 'lucide-react';
import { findAnswer } from './knowledge';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

interface SchedulingInfo {
  step: 'initial' | 'date' | 'time' | 'name' | 'email' | 'phone' | 'complete';
  date?: string;
  time?: string;
  name?: string;
  email?: string;
  phone?: string;
}

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: 'Hi! Ask me any questions about myself or schedule appointments through this chatbot assistant. What would you like to know? (Ask me what I am passionate about?)' }
]);
  const [input, setInput] = useState('');
  const [scheduling, setScheduling] = useState<SchedulingInfo | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const startScheduling = () => {
    setScheduling({ step: 'date' });
    setMessages(prev => [...prev, { 
      type: 'bot', 
      content: 'I\'ll help you schedule an appointment. What date would you prefer? (Please use MM/DD/YYYY format)' 
    }]);
  };

  const handleSchedulingInput = (input: string) => {
    if (!scheduling) return;

    switch (scheduling.step) {
      case 'date':
        // Basic date validation
        const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
        if (!dateRegex.test(input)) {
          setMessages(prev => [...prev, { 
            type: 'bot', 
            content: 'Please provide a valid date in MM/DD/YYYY format.' 
          }]);
          return;
        }
        setScheduling({ ...scheduling, date: input, step: 'time' });
        setMessages(prev => [...prev, { 
          type: 'bot', 
          content: 'What time would you prefer? (Please use HH:MM AM/PM format)' 
        }]);
        break;

      case 'time':
        // Basic time validation
        const timeRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i;
        if (!timeRegex.test(input)) {
          setMessages(prev => [...prev, { 
            type: 'bot', 
            content: 'Please provide a valid time in HH:MM AM/PM format.' 
          }]);
          return;
        }
        setScheduling({ ...scheduling, time: input, step: 'name' });
        setMessages(prev => [...prev, { 
          type: 'bot', 
          content: 'Please provide your full name:' 
        }]);
        break;

      case 'name':
        setScheduling({ ...scheduling, name: input, step: 'email' });
        setMessages(prev => [...prev, { 
          type: 'bot', 
          content: 'Please provide your email address:' 
        }]);
        break;

      case 'email':
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input)) {
          setMessages(prev => [...prev, { 
            type: 'bot', 
            content: 'Please provide a valid email address.' 
          }]);
          return;
        }
        setScheduling({ ...scheduling, email: input, step: 'phone' });
        setMessages(prev => [...prev, { 
          type: 'bot', 
          content: 'Please provide your phone number:' 
        }]);
        break;

      case 'phone':
        // Basic phone validation
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(input.replace(/\D/g, ''))) {
          setMessages(prev => [...prev, { 
            type: 'bot', 
            content: 'Please provide a valid 10-digit phone number.' 
          }]);
          return;
        }
        
        const finalScheduling: SchedulingInfo = {
          ...scheduling,
          phone: input,
          step: 'complete'
        };
        setScheduling(finalScheduling);

        // Here you would typically make an API call to Calendly
        // For now, we'll just show the scheduling link with the collected information
        const schedulingUrl = `https://calendly.com/thanon43?name=${encodeURIComponent(finalScheduling.name || '')}&email=${encodeURIComponent(finalScheduling.email || '')}&date=${encodeURIComponent(finalScheduling.date || '')}&time=${encodeURIComponent(finalScheduling.time || '')}`;
        
        setMessages(prev => [...prev, { 
          type: 'bot', 
          content: `Great! I'm opening Calendly with your preferred date (${finalScheduling.date} at ${finalScheduling.time}). Please confirm your appointment there.`
        }]);
        
        window.open(schedulingUrl, '_blank');
        setScheduling(null);
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: input }]);

    if (scheduling) {
      handleSchedulingInput(input);
    } else {
      // Check if the user wants to schedule
      if (input.toLowerCase().includes('schedule') || 
          input.toLowerCase().includes('appointment') || 
          input.toLowerCase().includes('meet')) {
        startScheduling();
      } else {
        // Get response from knowledge base
        const response = findAnswer(input);
        
        // Add bot response with a small delay to feel more natural
        setTimeout(() => {
          setMessages(prev => [...prev, { type: 'bot', content: response }]);
        }, 500);
      }
    }

    setInput('');
  };

  const handleCalendly = () => {
    startScheduling();
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-96 h-[32rem] mb-4 flex flex-col transform transition-all duration-200 ease-in-out">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageCircle size={20} className="text-blue-100" />
              <h3 className="font-semibold text-lg">ChatBot Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-600 p-2 rounded-full transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-blue-500 text-white rounded-br-sm'
                      : 'bg-white text-gray-800 shadow-md rounded-bl-sm'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={scheduling ? 'Enter the requested information...' : 'Type your message...'}
                className="flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <Send size={20} />
              </button>
              <button
                type="button"
                className="bg-green-500 text-white p-3 rounded-xl hover:bg-green-600 transition-colors duration-200 shadow-md hover:shadow-lg"
                onClick={handleCalendly}
              >
                <Calendar size={20} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}

export default ChatWidget;