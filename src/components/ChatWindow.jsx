    import MessageBubble from './MessageBubble';

    function ChatWindow({ messages }) {
    return (
        <div className="w-full max-w-2xl h-[500px] bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col overflow-hidden">
        {/* Header (optional) */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center py-3 font-semibold text-lg shadow">
            AI Chat Interface
        </div>

        {/* Message Area */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {messages.length === 0 ? (
            <div className="text-gray-400 text-sm text-center mt-16">
                Start a conversation...
            </div>
            ) : (
            messages.map((msg) => (
                <MessageBubble
                key={msg.id}
                sender={msg.sender}
                content={msg.content}
                type={msg.type}
                pluginName={msg.pluginName}
                />
            ))
            )}
        </div>
        </div>
    );
    }

    export default ChatWindow;
