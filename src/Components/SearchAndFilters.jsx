import { Search } from 'lucide-react';

const SearchAndFilters = () => {
    return (
        <div className="flex flex-wrap gap-3 border-2 p-4 rounded-md bg-white">
            <div className="relative flex-1 min-w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search anything here..."
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>

            <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm min-w-0 w-auto">
                <option>Buyer Name</option>
            </select>

            <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm min-w-0 w-auto">
                <option>Brand</option>
            </select>

            <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm min-w-0 w-auto">
                <option>Dept</option>
            </select>

            <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm min-w-0 w-auto">
                <option>Meeting Type</option>
            </select>

            <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm min-w-0 w-auto">
                <option>Participants</option>
            </select>

            <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm min-w-0 w-auto">
                <option>Meeting Date</option>
            </select>

            <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm min-w-0 w-auto">
                <option>Status</option>
            </select>
        </div>
    );
};

export default SearchAndFilters;