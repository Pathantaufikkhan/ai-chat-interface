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
    
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <ChatWindow messages={messages} />
      <button
  onClick={() => {
    clearMessages();
    setMessages([]);
  }}
  className="mt-4 text-sm text-red-500 underline hover:text-red-700"
>
  Clear Chat
</button>

      <ChatInput onSend={handleSend} />
    </div>
    
  );
}

export default App;
