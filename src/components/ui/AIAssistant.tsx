"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! I'm Harish's AI assistant. Ask me about his projects, skills, or resume!" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setInput("");

    // Simple mock responses based on keywords
    setTimeout(() => {
        let reply = "I'm just a demo AI assistant right now! Connect with Harish directly at harishlaloff@gmail.com for real inquiries.";
        
        const lowerInput = userMsg.toLowerCase();
        if (lowerInput.includes("project") || lowerInput.includes("last ceo") || lowerInput.includes("chatshield")) {
            reply = "Harish builds advanced AI applications. His top projects are 'The Last CEO' (a strategy simulator with an XGBoost engine) and 'ChatShield AI' (a dual-mode cyberbullying detection chatbot). Check out the Featured Projects section!";
        } else if (lowerInput.includes("skill") || lowerInput.includes("stack") || lowerInput.includes("tech")) {
            reply = "Harish's core stack includes Python, React, Next.js, FastAPI, and Machine Learning libraries like Scikit-learn, PyTorch, and Hugging Face.";
        } else if (lowerInput.includes("resume") || lowerInput.includes("cv") || lowerInput.includes("hire")) {
            reply = "You can download Harish's resume from the Hero section at the top of the page. He is currently available for new opportunities!";
        }

        setMessages(prev => [...prev, { role: "assistant", text: reply }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-neon-cyan/20 border border-neon-cyan rounded-full flex items-center justify-center text-neon-cyan shadow-[0_0_20px_rgba(0,240,255,0.3)] z-50 hover:bg-neon-cyan hover:text-black transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        suppressHydrationWarning
      >
        <Sparkles className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-8 w-[350px] max-w-[calc(100vw-2rem)] h-[450px] bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-neutral-800 flex items-center justify-between bg-black/50">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-neon-cyan" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-sm">Ask Harish AI</h3>
                        <p className="text-xs text-neon-cyan">Online</p>
                    </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white transition-colors">
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-neon-cyan text-black rounded-tr-sm' : 'bg-neutral-800 text-neutral-200 rounded-tl-sm'}`}>
                            {msg.text}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-neutral-800 bg-black/50">
                <div className="relative flex items-center">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask me anything..."
                        className="w-full bg-neutral-800 border border-neutral-700 rounded-full px-4 py-2 pr-10 text-sm text-white focus:outline-none focus:border-neon-cyan transition-colors"
                        suppressHydrationWarning
                    />
                    <button 
                        onClick={handleSend}
                        className="absolute right-2 p-1 text-neon-cyan hover:text-white transition-colors"
                        suppressHydrationWarning
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
