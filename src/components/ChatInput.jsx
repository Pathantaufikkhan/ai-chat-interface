    import { useState } from 'react';

    function ChatInput({ onSend }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onSend(text);
        setText('');
    };

    return (
        <form
        onSubmit={handleSubmit}
        className="w-full border-t px-4 py-3 flex items-center gap-2 bg-white"
        >
        <input
            type="text"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Type a message or /command"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
        >
            Send
        </button>
        </form>
    );
    }

    export default ChatInput;
