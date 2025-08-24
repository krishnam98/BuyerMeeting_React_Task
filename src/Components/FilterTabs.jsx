const FilterTabs = ({ activeFilter, setActiveFilter }) => {
    const tabs = [
        { key: 'all', label: 'All', count: 100 },
        { key: 'draft', label: 'Draft', count: 50 },
        { key: 'archive', label: 'Archive', count: 75 }
    ];

    return (
        <div className="flex space-x-1 mb-2 border-2 py-2 px-2 rounded-md bg-white">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    onClick={() => setActiveFilter(tab.key)}
                    className={`px-2 py-2 rounded-md text-sm font-medium flex items-center space-x-2 ${activeFilter === tab.key
                        ? 'bg-[#EAD9FF] text-purple-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                >
                    <span>{tab.label}</span>
                    <span className={`px-2 py-0.5 rounded-md text-xs ${activeFilter === tab.key
                        ? 'bg-purple-700 text-white'
                        : 'bg-gray-200 text-gray-600'
                        }`}>
                        {tab.count}
                    </span>
                </button>
            ))}
        </div>
    );

};

export default FilterTabs;