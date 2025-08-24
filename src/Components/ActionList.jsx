import { Eye, Edit, Activity, Trash2, Delete } from 'lucide-react';

const ActionList = ({ isOpen, onClose, position = { x: 0, y: 0 } }) => {
    if (!isOpen) return null;

    const actions = [
        {
            id: 'view',
            label: 'View',
            icon: Eye,
            onClick: () => {
                console.log('View clicked');
                onClose?.();
            }
        },
        {
            id: 'edit',
            label: 'Edit',
            icon: Edit,
            onClick: () => {
                console.log('Edit clicked');
                onClose?.();
            }
        },
        {
            id: 'activity',
            label: 'Activity Log',
            icon: Activity,
            onClick: () => {
                console.log('Activity Log clicked');
                onClose?.();
            }
        },
        {
            id: 'delete',
            label: 'Delete',
            icon: Delete,
            onClick: () => {
                console.log('Delete clicked');
                onClose?.();
            },
            isDestructive: true
        }
    ];

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-20"
                onClick={onClose}
            />

            {/* Action List */}
            <div
                className="fixed left-[-150px] top-[10px] z-20 bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[140px]"

            >
                {actions.map((action) => {
                    const IconComponent = action.icon;
                    return (
                        <button
                            key={action.id}
                            onClick={action.onClick}
                            className={`w-full flex items-center space-x-3 px-3 py-2 text-sm hover:bg-gray-50 transition-colors`}
                        >
                            <IconComponent className="w-4 h-4" />
                            <span>{action.label}</span>
                        </button>
                    );
                })}
            </div>
        </>
    );
};

export default ActionList;