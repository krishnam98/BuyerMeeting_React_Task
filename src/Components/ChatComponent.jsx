import { User, X } from "lucide-react";

const ChatComponent = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const messages = [
        { id: 1, user: 'user_name', time: '10 mins ago' },
        { id: 2, user: 'user_name', time: '10 mins ago' },
        { id: 3, user: 'user_name', time: '10 mins ago' },
        { id: 4, user: 'user_name', time: '10 mins ago' }
    ];

    return (
        <div className="absolute top-full right-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold text-gray-900">Chat</h3>
                </div>
                <button
                    onClick={onClose}
                    className="p-1 hover:bg-gray-100 rounded-full"
                >
                    <div className="bg-[#B8EECC] text-[#29B95F] border border-[#29B95F] text-xs px-2 py-0.5 rounded-md">
                        5 new
                    </div>
                </button>
            </div>

            {/* Messages List */}
            <div className="max-h-96 overflow-y-auto">
                {messages.map((message) => (
                    <div key={message.id} className="flex items-start p-3 hover:bg-gray-50 border-b border-gray-100">
                        <div className="flex-shrink-0 mr-3">
                            <img
                                src="/profile.png"
                                alt="Profile"
                                className="w-10 h-10 rounded-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            <div className="w-10 h-10 bg-gray-300 rounded-full items-center justify-center hidden">
                                <User className="w-5 h-5 text-gray-600" />
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-[#676767]">New Message</p>
                                <button className="p-1 hover:bg-gray-200 rounded-full">
                                    <X className="w-3 h-3 text-gray-400" />
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mb-1">
                                You have a new messages from <span className="text-blue-500">[{message.user}]</span>
                            </p>
                            <p className="text-xs text-gray-400">{message.time}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="p-3">
                <button className="w-full bg-purple-600 font-normal text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                    View All
                </button>
            </div>
        </div>
    );
};

export default ChatComponent;