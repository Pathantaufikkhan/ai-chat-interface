import { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import { parseCommand } from './utils/commandParser';
import { pluginManager } from './plugins/pluginManager';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { saveMessages, loadMessages,clearMessages } from './utils/storage';


function App() {
  const [messages, setMessages] = useState([]);
useEffect(() => {
  const saved = loadMessages();
  setMessages(saved);
}, []);
useEffect(() => {
  saveMessages(messages);
}, [messages]);


  const handleSend = async (text) => {
    const userMsg = {
      id: uuidv4(),
      sender: 'user',
      content: text,
      type: 'text',
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);

    const parsed = parseCommand(text);

    if (parsed && pluginManager[parsed.command]) {
      // Show loading placeholder
      const placeholder = {
        id: uuidv4(),
        sender: 'assistant',
        content: `⏳ Cooking /${parsed.command}...`,
        type: 'plugin',
        pluginName: parsed.command,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, placeholder]);

      // Run the plugin asynchronously
      const output = await pluginManager[parsed.command](parsed.args);

      const pluginReply = {
        ...placeholder,
        content: output,
      };

      // Replace the placeholder with the real result
      setMessages((prev) =>
        prev.map((msg) => (msg.id === placeholder.id ? pluginReply : msg))
      );
    } else {
      // Fallback echo reply if no plugin matched
      const botReply = {
        id: uuidv4(),
        sender: 'assistant',
        content: `Echo: ${text}`,
        type: 'text',
        timestamp: new Date().toISOString(),
      };

      setTimeout(() => {
        setMessages((prev) => [...prev, botReply]);
      }, 500);
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
    <div className="w-full max-w-2xl h-[90vh] flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">

      {/* Optional Header */}
      <div className="bg-indigo-600 text-white text-center py-3 font-semibold text-lg shadow">
        💬 AI Plugin Chat
      </div>

      {/* Chat Messages */}
      <ChatWindow messages={messages} />

      {/* Input */}
      <ChatInput onSend={handleSend} />

      {/* Clear Button */}
      <div className="text-center p-2 text-xs text-red-500 hover:underline cursor-pointer">
        <button
          onClick={() => {
            clearMessages();
            setMessages([]);
          }}
        >
          Clear Chat
        </button>
      </div>
    </div>
  </div>
);

}

export default App;
