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
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mt-4 flex gap-2">
        <input
            className="flex-1 p-2 border rounded"
            type="text"
            placeholder="Type a message or /command"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
            Send
        </button>
        </form>
    );
    }

    export default ChatInput;
