import { Search } from 'lucide-react';

const SearchAndFilters = ({ searchTerm, setSearchTerm, filters, setFilters }) => {
    return (
        <div className="border-2 p-4 rounded-md bg-white mb-4">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <div className="relative flex-shrink-0 min-w-64">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search anything here..."
                        className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full "
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <select
                    className="px-3 py-2 border border-gray-200 rounded-lg  text-sm flex-shrink-0 min-w-fit"
                    value={filters?.buyerName}
                    onChange={(e) => setFilters(prev => ({ ...prev, buyerName: e.target.value }))}
                >
                    <option value="">Buyer Name</option>
                    <option value="Mango Private Limited">Mango Private Limited</option>
                    <option value="Cherry Innovations">Cherry Innovations</option>
                    <option value="Pineapple Inc.">Pineapple Inc.</option>
                    <option value="Peach Corp.">Peach Corp.</option>
                    <option value="Banana Solutions">Banana Solutions</option>
                    <option value="Coconut Group">Coconut Group</option>
                    <option value="Lemon Technologies">Lemon Technologies</option>
                    <option value="Grapefruit LLC">Grapefruit LLC</option>
                    <option value="Kiwi Systems">Kiwi Systems</option>
                    <option value="Orange Enterprises">Orange Enterprises</option>
                </select>

                <select
                    className="px-3 py-2 border border-gray-200 rounded-lg  text-sm flex-shrink-0 min-w-fit"
                    value={filters?.brand}
                    onChange={(e) => setFilters(prev => ({ ...prev, brand: e.target.value }))}
                >
                    <option value="">Brand</option>
                    <option value="Mango">Mango</option>
                    <option value="Cherry">Cherry</option>
                    <option value="Pineapple">Pineapple</option>
                    <option value="Peach">Peach</option>
                    <option value="Banana">Banana</option>
                    <option value="Coconut">Coconut</option>
                    <option value="Lemon">Lemon</option>
                    <option value="Grapefruit">Grapefruit</option>
                    <option value="Kiwi">Kiwi</option>
                    <option value="Orange">Orange</option>
                </select>

                <select
                    className="px-3 py-2 border border-gray-200 rounded-lg  text-sm flex-shrink-0 min-w-fit"
                    value={filters?.dept}
                    onChange={(e) => setFilters(prev => ({ ...prev, dept: e.target.value }))}
                >
                    <option value="">Dept</option>
                    <option value="Design">Design</option>
                    <option value="Development">Development</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                    <option value="Product">Product</option>
                    <option value="Support">Support</option>
                    <option value="Sales">Sales</option>
                    <option value="Research">Research</option>
                    <option value="HR">HR</option>
                    <option value="Legal">Legal</option>
                </select>

                <select
                    className="px-3 py-2 border border-gray-200 rounded-lg  text-sm flex-shrink-0 min-w-fit"
                    value={filters?.type}
                    onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                >
                    <option value="">Meeting Type</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                </select>

                <select
                    className="px-3 py-2 border border-gray-200 rounded-lg  text-sm flex-shrink-0 min-w-fit"
                    value={filters?.participants}
                    onChange={(e) => setFilters(prev => ({ ...prev, participants: e.target.value }))}
                >
                    <option value="">Participants</option>
                    <option value="Mohd Saleem +2">Mohd Saleem +2</option>
                </select>

                <select
                    className="px-3 py-2 border border-gray-200 rounded-lg  text-sm flex-shrink-0 min-w-fit"
                    value={filters?.meetingDate}
                    onChange={(e) => setFilters(prev => ({ ...prev, meetingDate: e.target.value }))}
                >
                    <option value="">Meeting Date</option>
                    <option value="01 May, 2025 at 2pm">01 May, 2025 at 2pm</option>
                    <option value="02 May, 2025 at 3pm">02 May, 2025 at 3pm</option>
                    <option value="03 May, 2025 at 10am">03 May, 2025 at 10am</option>
                    <option value="04 May, 2025 at 1pm">04 May, 2025 at 1pm</option>
                    <option value="05 May, 2025 at 4pm">05 May, 2025 at 4pm</option>
                    <option value="06 May, 2025 at 11am">06 May, 2025 at 11am</option>
                    <option value="07 May, 2025 at 2pm">07 May, 2025 at 2pm</option>
                    <option value="08 May, 2025 at 9am">08 May, 2025 at 9am</option>
                    <option value="09 May, 2025 at 3pm">09 May, 2025 at 3pm</option>
                    <option value="10 May, 2025 at 5pm">10 May, 2025 at 5pm</option>
                </select>

                <select
                    className="px-3 py-2 border border-gray-200 rounded-lg  text-sm flex-shrink-0 min-w-fit"
                    value={filters?.status}
                    onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                >
                    <option value="">Status</option>
                    <option value="Completed">Completed</option>
                    <option value="Upcoming">Upcoming</option>
                    <option value="Follow-up">Follow-up</option>
                    <option value="Re-scheduled">Re-scheduled</option>
                    <option value="Overdue">Overdue</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Draft">Draft</option>
                    <option value="Archived">Archived</option>
                </select>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default SearchAndFilters;