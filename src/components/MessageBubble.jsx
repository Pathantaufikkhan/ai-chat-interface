    function MessageBubble({ sender, content, type, pluginName }) {
    const isUser = sender === 'user';

    const baseStyle = `px-4 py-2 max-w-[80%] md:max-w-[70%] rounded-xl text-sm whitespace-pre-wrap`;
    const bubbleStyle = isUser
        ? `bg-blue-500 text-white ${baseStyle} rounded-br-none shadow-md`
        : `bg-gray-100 text-gray-800 ${baseStyle} rounded-bl-none shadow`;

    const renderPluginCard = () => {
        const cardBase = 'p-4 rounded-lg text-sm shadow-md';
        switch (pluginName) {
        case 'weather':
            return (
            <div className={`${cardBase} bg-yellow-50 border-l-4 border-yellow-400`}>
                <div className="font-semibold text-yellow-800 mb-1">🌤️ Weather Update</div>
                <div className="text-yellow-900 whitespace-pre-line">{content}</div>
            </div>
            );
        case 'calc':
            return (
            <div className={`${cardBase} bg-green-50 border-l-4 border-green-400`}>
                <div className="font-semibold text-green-800 mb-1">🧮 Calculator Result</div>
                <div className="text-green-900">{content}</div>
            </div>
            );
        case 'define':
            return (
            <div className={`${cardBase} bg-purple-50 border-l-4 border-purple-400`}>
                <div className="font-semibold text-purple-800 mb-1">📖 Dictionary</div>
                <div className="text-purple-900 whitespace-pre-line">{content}</div>
            </div>
            );
        default:
            return (
            <div className={`${cardBase} bg-gray-100 border-l-4 border-gray-300`}>
                <div className="text-gray-800">{content}</div>
            </div>
            );
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
