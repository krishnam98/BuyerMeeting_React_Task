import {
    ChevronLeft,
    ChevronRight,

} from 'lucide-react';


const Pagination = () => {
    return (
        <div className="flex items-center justify-between mt-6 p-6 border-t">
            <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-600">Items Per Page</span>
                <select className="px-1 py-1 text-gray-600 border border-gray-200 rounded text-sm">
                    <option>50</option>
                    <option>100</option>
                    <option>200</option>
                </select>
            </div>

            <div className="flex items-center space-x-2">
                <span className="text-sm  font-medium text-gray-600">1-50 of 100</span>
                <div className="flex space-x-1">
                    <button className="p-2 rounded hover:bg-gray-100">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="px-3 py-1 bg-purple-600 text-white rounded">1</button>
                    <button className="px-3 py-1 hover:bg-gray-100 rounded">2</button>
                    <button className="px-3 py-1 hover:bg-gray-100 rounded">3</button>
                    <button className="px-3 py-1 hover:bg-gray-100 rounded">4</button>
                    <span className="px-2 py-1">...</span>
                    <button className="px-3 py-1 hover:bg-gray-100 rounded">10</button>
                    <button className="px-3 py-1 hover:bg-gray-100 rounded">11</button>
                    <button className="px-3 py-1 hover:bg-gray-100 rounded">12</button>
                    <button className="p-2 rounded hover:bg-gray-100">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pagination;