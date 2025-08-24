import { useState } from "react";
import FilterTabs from "./FilterTabs";
import Pagination from "./Pagination";
import SearchAndFilters from "./SearchAndFilters";
import Sidebar from "./SideBar";
import Header from "./Header";
import {
    Plus,
    Download,
    ChevronRight,
    Upload,
} from 'lucide-react';
import MeetingTable from "./MeetingTable";

const meetingsData = [
    {
        id: 1,
        date: "01 May, 2025 at 2pm",
        status: "Completed",
        type: "Online",
        buyerName: "Mango Private Limited",
        brand: "Mango",
        dept: "Design",
        title: "Costing Discussion with Zara",
        meetingDate: "01 May, 2025 at 2pm",
        participants: "Mohd Saleem +2"
    },
    {
        id: 2,
        date: "02 May, 2025 at 3pm",
        status: "Upcoming",
        type: "Offline",
        buyerName: "Cherry Innovations",
        brand: "Cherry",
        dept: "Development",
        title: "UI/UX Review",
        meetingDate: "02 May, 2025 at 3pm",
        participants: "Mohd Saleem +2"
    },
    {
        id: 3,
        date: "03 May, 2025 at 10am",
        status: "Follow-up",
        type: "Offline",
        buyerName: "Pineapple Inc.",
        brand: "Pineapple",
        dept: "Marketing",
        title: "Campaign Strategy",
        meetingDate: "03 May, 2025 at 10am",
        participants: "Mohd Saleem +2"
    },
    {
        id: 4,
        date: "04 May, 2025 at 1pm",
        status: "Re-scheduled",
        type: "Offline",
        buyerName: "Peach Corp.",
        brand: "Peach",
        dept: "Finance",
        title: "Budget Review",
        meetingDate: "04 May, 2025 at 1pm",
        participants: "Mohd Saleem +2"
    },
    {
        id: 5,
        date: "05 May, 2025 at 4pm",
        status: "Overdue",
        type: "Online",
        buyerName: "Banana Solutions",
        brand: "Banana",
        dept: "Product",
        title: "Feature Prioritization",
        meetingDate: "05 May, 2025 at 4pm",
        participants: "Mohd Saleem +2"
    },
    {
        id: 6,
        date: "06 May, 2025 at 11am",
        status: "In Progress",
        type: "Online",
        buyerName: "Coconut Group",
        brand: "Coconut",
        dept: "Support",
        title: "Customer Feedback",
        meetingDate: "06 May, 2025 at 11am",
        participants: "Mohd Saleem +2"
    },
    {
        id: 7,
        date: "07 May, 2025 at 2pm",
        status: "Ongoing",
        type: "Online",
        buyerName: "Lemon Technologies",
        brand: "Lemon",
        dept: "Sales",
        title: "Sales Strategy",
        meetingDate: "07 May, 2025 at 2pm",
        participants: "Mohd Saleem +2"
    },
    {
        id: 8,
        date: "08 May, 2025 at 9am",
        status: "Completed",
        type: "Offline",
        buyerName: "Grapefruit LLC",
        brand: "Grapefruit",
        dept: "Research",
        title: "Market Analysis",
        meetingDate: "08 May, 2025 at 9am",
        participants: "Mohd Saleem +2"
    },
    {
        id: 9,
        date: "09 May, 2025 at 3pm",
        status: "Draft",
        type: "Offline",
        buyerName: "Kiwi Systems",
        brand: "Kiwi",
        dept: "HR",
        title: "Employee Engagement",
        meetingDate: "09 May, 2025 at 3pm",
        participants: "Mohd Saleem +2"
    },
    {
        id: 10,
        date: "10 May, 2025 at 5pm",
        status: "Archived",
        type: "Offline",
        buyerName: "Orange Enterprises",
        brand: "Orange",
        dept: "Legal",
        title: "Contract Review",
        meetingDate: "10 May, 2025 at 5pm",
        participants: "Mohd Saleem +2"
    }
];

const BuyerMeetingDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeFilter, setActiveFilter] = useState('all');

    return (
        <div className="min-h-screen bg-gray-50 flex overflow-hidden">
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

            <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} min-w-0`}>
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <main className="flex-1 p-4 overflow-hidden flex flex-col">
                    {/* Page Header - Made more compact */}
                    <div className="mb-4 flex-shrink-0">
                        <div className="flex items-center justify-between mb-3">
                            <div>
                                <h1 className="text-xl font-semibold text-gray-900">Buyer Meeting List View</h1>
                                <div className="flex items-center text-xs text-gray-500 mt-1">
                                    <span className="text-purple-700 font-medium">Buyer Meeting</span>
                                    <ChevronRight className="w-3 h-3 mx-1" />
                                    <span className="font-medium">Buyer Meeting List View</span>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button className="flex items-center space-x-2 px-3 py-1.5 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                    <Upload className="w-3 h-3" />
                                    <span>Export</span>
                                </button>
                                <button className="flex items-center space-x-2 px-3 py-1.5 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800">
                                    <Plus className="w-3 h-3" />
                                    <span>Create New Meeting</span>
                                </button>
                            </div>
                        </div>

                        <FilterTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                        <SearchAndFilters />
                    </div>

                    {/* Table Container - Scrollable */}
                    <div className="flex-1 overflow-hidden w-[100%]">
                        <MeetingTable />
                    </div>
                </main>
            </div>
        </div>
    );;
};

export default BuyerMeetingDashboard;