import {
    Search,
    Menu,
    Bell,
    MessageSquare
} from 'lucide-react';
import { useState } from 'react';
import ChatComponent from './ChatComponent';
import NotificationComponent from './NotificationComponent';


const Header = ({ sidebarOpen, setSidebarOpen }) => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const toggleNotifications = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };

    const closeNotifications = () => {
        setIsNotificationOpen(false);
    };

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const closeChat = () => {
        setIsChatOpen(false);
    };
    return (
        <header className="bg-white shadow-sm border-b px-4 py-2 flex items-center justify-between flex-shrink-0 h-14">
            <div className="flex items-center space-x-3">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-1.5 rounded-lg hover:bg-gray-100"
                >
                    <Menu className="w-4 h-4" />
                </button>
                <div className="relative">
                    <Search className="w-4 h-4 absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search anything here..."
                        className="pl-8 pr-3 py-1.5 text-sm border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-3">
                <div className="relative">
                    <button
                        onClick={toggleNotifications}
                        className="relative p-1 hover:bg-gray-100 rounded-lg"
                    >
                        <Bell className="w-5 h-5 text-gray-600" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-[9px] text-white font-bold">5</span>
                        </div>
                    </button>
                    <NotificationComponent isOpen={isNotificationOpen} onClose={closeNotifications} />
                </div>
                <div className="relative">
                    <button
                        onClick={toggleChat}
                        className="relative p-1 hover:bg-gray-100 rounded-lg"
                    >
                        <MessageSquare className="w-5 h-5 text-gray-600" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-[9px] text-white font-bold">5</span>
                        </div>
                    </button>
                    <ChatComponent isOpen={isChatOpen} onClose={closeChat} />
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 bg-gray-300 rounded-full"></div>
                    <div>
                        <p className="text-xs font-medium text-gray-900">Mohd Saleem</p>
                        <p className="text-xs text-gray-500">Admin</p>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;  