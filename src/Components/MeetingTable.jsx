import React, { useMemo, useState } from 'react';
import StatusBadge from './StatusBadge';
import TypeBadge from './TypeBadge';
import Pagination from './Pagination';
import { MoreHorizontal } from 'lucide-react';
import ParticipantsTooltip from './ParticipantsTooltip';
import SearchAndFilters from './SearchAndFilters';
import FilterTabs from './FilterTabs';
import ActionList from './ActionList';

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

const MeetingTable = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ position: { x: 0, y: 0 } });
    const [hoveredMeeting, setHoveredMeeting] = useState(null);
    const [selectedRows, setSelectedRows] = useState(new Set());
    const [selectAll, setSelectAll] = useState(false);

    // Action List states
    const [actionListOpen, setActionListOpen] = useState(false);
    const [actionPosition, setActionPosition] = useState({ x: 0, y: 0 });
    const [actionMeeting, setActionMeeting] = useState(null);

    // Search and filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        buyerName: '',
        brand: '',
        dept: '',
        type: '',
        participants: '',
        meetingDate: '',
        status: '',
        tabs: 'all'
    });

    const handleFilterTabs = (tab) => {
        setFilters(prev => ({ ...prev, tabs: tab }))
        setActiveFilter(tab);
    }

    // Filter and search logic
    const filteredMeetings = useMemo(() => {
        let filtered = meetingsData;

        // Apply search filter
        if (searchTerm) {
            const search = searchTerm.toLowerCase();
            filtered = filtered.filter(meeting =>
                meeting.buyerName.toLowerCase().includes(search) ||
                meeting.brand.toLowerCase().includes(search) ||
                meeting.dept.toLowerCase().includes(search) ||
                meeting.title.toLowerCase().includes(search) ||
                meeting.status.toLowerCase().includes(search) ||
                meeting.type.toLowerCase().includes(search) ||
                meeting.participants.toLowerCase().includes(search) ||
                meeting.meetingDate.toLowerCase().includes(search) ||
                meeting.date.toLowerCase().includes(search)
            );
        }

        // Apply filters
        if (filters.buyerName) {
            filtered = filtered.filter(meeting => meeting.buyerName === filters.buyerName);
        }
        if (filters.brand) {
            filtered = filtered.filter(meeting => meeting.brand === filters.brand);
        }
        if (filters.dept) {
            filtered = filtered.filter(meeting => meeting.dept === filters.dept);
        }
        if (filters.type) {
            filtered = filtered.filter(meeting => meeting.type === filters.type);
        }
        if (filters.participants) {
            filtered = filtered.filter(meeting => meeting.participants === filters.participants);
        }
        if (filters.meetingDate) {
            filtered = filtered.filter(meeting => meeting.meetingDate === filters.meetingDate);
        }
        if (filters.status) {
            filtered = filtered.filter(meeting => meeting.status === filters.status);
        }
        if (filters.tabs !== "all") {
            filtered = filtered.filter(meeting => meeting.status === filters.tabs);
        }

        return filtered;
    }, [searchTerm, filters]);

    const handleMouseEnter = (e, meeting) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltipPosition({
            position: {
                x: e.clientX + 12,
                y: e.clientY + 12,
            }
        });
        setHoveredMeeting(meeting);
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
        setTooltipPosition({ position: { x: 0, y: 0 } });
        setHoveredMeeting(null);
    };

    const handleRowSelect = (meetingId) => {
        const newSelectedRows = new Set(selectedRows);
        if (newSelectedRows.has(meetingId)) {
            newSelectedRows.delete(meetingId);
        } else {
            newSelectedRows.add(meetingId);
        }
        setSelectedRows(newSelectedRows);
        setSelectAll(newSelectedRows.size === filteredMeetings.length);
    };

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedRows(new Set());
            setSelectAll(false);
        } else {
            setSelectedRows(new Set(filteredMeetings.map(meeting => meeting.id)));
            setSelectAll(true);
        }
    };

    const handleActionClick = (e, meeting) => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        setActionPosition({
            x: rect.left + scrollLeft - 140, // Position to the left of the button
            y: rect.bottom + scrollTop + 4   // Position below the button
        });
        setActionMeeting(meeting);
        setActionListOpen(true);
    };

    const handleCloseActionList = () => {
        setActionListOpen(false);
        setActionMeeting(null);
    };

    return (
        <div>
            <FilterTabs activeFilter={activeFilter} setActiveFilter={handleFilterTabs} />
            <SearchAndFilters
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filters={filters}
                setFilters={setFilters}
            />

            <div className="bg-white border-2 rounded-lg shadow h-full flex flex-col relative">
                <div className="flex-1 overflow-x-auto overflow-y-auto">
                    <table className="divide-y divide-gray-200" style={{ minWidth: '1560px', width: '100%' }}>
                        <thead className="bg-gray-100 sticky top-0">
                            <tr>
                                <th className="px-4 py-2 text-left" style={{ width: '50px' }}>
                                    <input type="checkbox" className="w-4 h-4 rounded accent-purple-700" checked={selectAll}
                                        onChange={handleSelectAll} />
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-800 uppercase tracking-wider" style={{ width: '160px' }}>
                                    <div className="flex items-center gap-2">
                                        Date & Time
                                        <img src="/icons/Arrows.svg" alt="" className="w-3 h-3" />
                                    </div>
                                </th>
                                <th className="px-4 py-2  text-left text-xs font-medium text-gray-800 uppercase tracking-wider" style={{ width: '410px' }}>
                                    <div className="flex items-center gap-2">
                                        Status
                                        <img src="/icons/Arrows.svg" alt="" className="w-3 h-3" />
                                    </div>
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-800 uppercase tracking-wider" style={{ width: '90px' }}>
                                    <div className="flex items-center gap-2">
                                        Type
                                        <img src="/icons/Type.svg" alt="" className="w-3 h-3" />
                                    </div>
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-800 uppercase tracking-wider" style={{ width: '220px' }}>
                                    <div className="flex items-center gap-2">
                                        Buyer Name
                                        <img src="/icons/BuyerName.svg" alt="" className="w-3 h-3" />
                                    </div>
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-800 uppercase tracking-wider" style={{ width: '130px' }}>
                                    <div className="flex items-center gap-2">
                                        Brand
                                        <img src="/icons/BuyerName.svg" alt="" className="w-3 h-3" />
                                    </div>
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-800 uppercase tracking-wider" style={{ width: '120px' }}>
                                    <div className="flex items-center gap-2">
                                        Dept.
                                        <img src="/icons/BuyerName.svg" alt="" className="w-3 h-3" />
                                    </div>
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-800 uppercase tracking-wider" style={{ width: '220px' }}>
                                    <div className="flex items-center gap-2">
                                        Title
                                        <img src="/icons/Arrows.svg" alt="" className="w-3 h-3" />
                                    </div>
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-800 uppercase tracking-wider" style={{ width: '160px' }}>
                                    <div className="flex items-center gap-2">
                                        Meeting Date
                                        <img src="/icons/Arrows.svg" alt="" className="w-3 h-3" />
                                    </div>
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-800 uppercase tracking-wider" style={{ width: '160px' }}>
                                    <div className="flex items-center gap-2">
                                        Participants
                                        <img src="/icons/Arrows.svg" alt="" className="w-3 h-3" />
                                    </div>
                                </th>
                                <th className="px-4 py-2 sticky right-[0] z-[50] bg-gray-100  text-left text-xs font-medium text-gray-800 uppercase tracking-wider drop-shadow-[-4px_0_4px_rgba(0,0,0,0.12)]" style={{ width: '80px' }}>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className=" divide-y divide-gray-200">
                            {filteredMeetings.map((meeting) => (
                                <tr key={meeting.id} className={`hover:bg-[#F7F0FF] ${selectedRows.has(meeting.id) ? "bg-[#F7F0FF]" : ""}`} >
                                    <td className="px-4 py-3" style={{ width: '50px' }}>
                                        <input type="checkbox" className="w-4 h-4 rounded accent-purple-700" checked={selectedRows.has(meeting.id)}
                                            onChange={() => handleRowSelect(meeting.id)} />
                                    </td>
                                    <td className="px-4 py-3 text-[15px] text-gray-500 whitespace-nowrap" style={{ width: '160px' }}>
                                        {meeting.date}
                                    </td>
                                    <td className="px-4 py-3 " style={{ width: '240px' }}>
                                        <StatusBadge status={meeting.status} />
                                    </td>
                                    <td className="px-4 py-3" style={{ width: '90px' }}>
                                        <TypeBadge type={meeting.type} />
                                    </td>
                                    <td className="px-4 py-3 text-[15px] font-medium text-gray-black underline cursor-pointer hover:text-purple-600 whitespace-nowrap" style={{ width: '220px' }}>
                                        {meeting.buyerName}
                                    </td>
                                    <td className="px-4 py-3 text-[15px] font-medium text-black underline cursor-pointer hover:text-purple-600 whitespace-nowrap" style={{ width: '130px' }}>
                                        {meeting.brand}
                                    </td>
                                    <td className="px-4 py-3 text-[15px] font-medium text-black underline cursor-pointer hover:text-purple-600 whitespace-nowrap" style={{ width: '120px' }}>
                                        {meeting.dept}
                                    </td>
                                    <td className="px-4 py-3 text-[15px] font-medium text-black underline cursor-pointer hover:text-purple-600 whitespace-nowrap" style={{ width: '220px' }}>
                                        {meeting.title}
                                    </td>
                                    <td className="px-4 py-3 text-[15px] text-gray-500 whitespace-nowrap" style={{ width: '160px' }}>
                                        {meeting.meetingDate}
                                    </td>
                                    <td className="relative px-4 py-3 hover:bg-blue-50" style={{ width: '160px' }}>
                                        <div
                                            className="flex items-center space-x-2 whitespace-nowrap cursor-pointer"
                                            onMouseEnter={(e) => handleMouseEnter(e, meeting)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                                                M
                                            </div>
                                            <span className="text-[15px] font-medium text-gray-600">{meeting.participants}</span>
                                        </div>
                                        {hoveredMeeting?.id === meeting.id && <ParticipantsTooltip
                                            isVisible={showTooltip}
                                            position={tooltipPosition}
                                        />}
                                    </td>
                                    <td className="px-4 py-3 z-10 sticky bg-white right-[0] drop-shadow-[-4px_0_4px_rgba(0,0,0,0.12)]" style={{ width: '80px' }}>
                                        <button
                                            className="p-1 rounded hover:bg-gray-100"
                                            onClick={(e) => handleActionClick(e, meeting.id)}
                                        >
                                            <MoreHorizontal className="w-3 h-3 text-gray-400" />
                                        </button>
                                        {actionMeeting === meeting.id && <ActionList
                                            isOpen={actionListOpen}
                                            onClose={handleCloseActionList}
                                            position={actionPosition}
                                        />}

                                    </td>
                                </tr>
                            ))}
                            {filteredMeetings.length === 0 && (
                                <tr>
                                    <td colSpan="11" className="px-4 py-8 text-center text-gray-500">
                                        No meetings found matching your search criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="flex-shrink-0 border-t">
                    <Pagination />
                </div>

                {selectedRows.size > 0 && (
                    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
                        <div className="bg-black text-white px-4 py-2 rounded-lg shadow-lg">
                            <span className="text-sm font-medium">
                                {selectedRows.size} row{selectedRows.size !== 1 ? 's' : ''} selected
                            </span>
                        </div>
                    </div>
                )}



            </div>
        </div>
    );
};

export default MeetingTable;