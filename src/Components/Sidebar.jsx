import { ChevronDown } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
    const menuItems = [
        { icon: "/icons/dashboard.svg", label: 'Dashboard', active: false },
        { icon: '/icons/task-square.svg', label: 'Tasks', active: false },
        { icon: '/icons/buyerMeeting.svg', label: 'Buyer Meeting', active: true },
        { icon: '/icons/Quick Costing.svg', label: 'Quick Costing', active: false },
        { icon: '/icons/pre-order Costing.svg', label: 'Pre Order Costing', active: false },
        { icon: '/icons/StyleLibrary.svg', label: 'Style Library', active: false },
        { icon: '/icons/Requisition.svg', label: 'Requisitions', active: false, hasSubmenu: true },
        { icon: '/icons/Buyer Purchase.svg', label: 'Buyer Purchase', active: false, hasSubmenu: true },
        { icon: '/icons/Inventory.svg', label: 'Inventory', active: false, hasSubmenu: true },
        { icon: '/icons/Sample Development.svg', label: 'Sample Development', active: false, hasSubmenu: true },
        { icon: '/icons/Production.svg', label: 'Production', active: false, hasSubmenu: true },
        { icon: '/icons/Master Admin.svg', label: 'Master Admin', active: false, hasSubmenu: true },
        { icon: '/icons/Users.svg', label: 'Users', active: false, hasSubmenu: true },
        { icon: '/icons/Users.svg', label: 'Suppliers', active: false },
        { icon: '/icons/Showroom.svg', label: 'Showroom', active: false, hasSubmenu: true },
        { icon: '/icons/Shipment.svg', label: 'Shipment', active: false, hasSubmenu: true },
        { icon: '/icons/KPI.svg', label: 'KPIs', active: false, hasSubmenu: true },
        { icon: '/icons/E-voice.svg', label: 'E-Invoice / E-Way Bill', active: false },
        { icon: '/icons/Reports.svg', label: 'Reports', active: false },
        { icon: '/icons/Master Data.svg', label: 'Master Data', active: false, hasSubmenu: true },
    ];

    return (
        <div className={`bg-white shadow-lg h-screen fixed left-0 top-0 z-50 transition-all duration-300 ${isOpen ? 'w-64' : 'w-0'
            } overflow-hidden`}>
            <div className="px-4 py-2 border-b h-14 flex items-start justify-start">
                <img src="/icons/new logo.svg" alt="Company Logo" className="h-8" />
            </div>

            <div className="p-4 overflow-y-auto h-full">
                <nav className="space-y-2">
                    {menuItems.map((item, index) => (
                        <div key={index}>
                            <div className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${item.active ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
                                }`}>
                                <div className="flex items-center space-x-3">
                                    <img src={item.icon} alt={item.label} className="w-5 h-5" />
                                    <span className="text-sm font-medium">{item.label}</span>
                                </div>
                                {item.hasSubmenu && (
                                    <ChevronDown className="w-4 h-4" />
                                )}
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;