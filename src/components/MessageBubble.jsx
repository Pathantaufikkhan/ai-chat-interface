    function MessageBubble({ sender, content, type, pluginName }) {
    const isUser = sender === 'user';

    const baseStyle = `px-4 py-2 rounded-lg max-w-[80%] whitespace-pre-wrap`;
    const bubbleStyle = isUser
        ? `bg-blue-500 text-white ${baseStyle}`
        : `bg-gray-200 text-gray-800 ${baseStyle}`;

    const renderPluginCard = () => {
        switch (pluginName) {
        case 'weather':
            return (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded shadow-sm">
                <div className="font-semibold text-yellow-800 mb-1">🌤️ Weather Update</div>
                <div className="text-sm text-yellow-900 whitespace-pre-line">{content}</div>
            </div>
            );
        case 'calc':
            return (
            <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded shadow-sm">
                <div className="font-semibold text-green-800 mb-1">🧮 Calculator Result</div>
                <div className="text-sm text-green-900">{content}</div>
            </div>
            );
        case 'define':
            return (
            <div className="bg-purple-100 border-l-4 border-purple-500 p-4 rounded shadow-sm">
                <div className="font-semibold text-purple-800 mb-1">📖 Dictionary</div>
                <div className="text-sm text-purple-900 whitespace-pre-line">{content}</div>
            </div>
            );
        default:
            return <div className="bg-gray-100 p-4 rounded">{content}</div>;
        }
    };

    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
        <div className={bubbleStyle}>
            {type === 'plugin' ? renderPluginCard() : content}
        </div>
        </div>
    );
    }

    export default MessageBubble;
