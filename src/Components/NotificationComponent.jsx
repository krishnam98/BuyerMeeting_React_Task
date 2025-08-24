import { Calendar, User, X } from "lucide-react";

const NotificationComponent = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const notifications = [
        {
            id: 1,
            type: 'task',
            title: 'Task completed',
            description: '[task_name] marked as completed.',
            time: '10 mins ago',
            avatar: true
        },
        {
            id: 2,
            type: 'meeting',
            title: 'Meeting Created',
            description: 'New meeting [meeting_title] is created for [date_time].',
            time: '5 mins ago',
            avatar: false
        },
        {
            id: 3,
            type: 'action',
            title: 'Action Item Added',
            description: '[action_item_name] is added in meeting [meeting_title].',
            time: '22 May 2025',
            avatar: false
        },
        {
            id: 4,
            type: 'task',
            title: 'Task assigned',
            description: '[task_name] has been assigned to [user_name].',
            time: '2 hours ago',
            avatar: true
        }
    ];

    return (
        <div className="absolute top-full right-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            {/* Notification Header */}
            <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>

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

            {/* Notifications List */}
            <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0">
                        <div className="flex-shrink-0 mr-3">
                            {notification.avatar ? (
                                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                    <User className="w-5 h-5 text-gray-600" />
                                </div>
                            ) : (
                                <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
                                    <Calendar className="w-5 h-5 text-white" />
                                </div>
                            )}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                                <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                                <button className="p-1 hover:bg-gray-200 rounded-full flex-shrink-0">
                                    <X className="w-3 h-3 text-gray-400" />
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mb-1">
                                {notification.description}
                            </p>
                            <p className="text-xs text-gray-400">{notification.time}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="p-3">
                <button className="w-full bg-purple-600 font-normal text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                    View All
                </button>
            </div>
        </div>
    );
};

export default NotificationComponent;