const FilterTabs = ({ activeFilter, setActiveFilter }) => {
    const tabs = [
        { key: 'All', label: 'all', count: 10 },
        { key: 'Draft', label: 'Draft', count: 1 },
        { key: 'Archive', label: 'Archived', count: 1 }
    ];

    return (
        <div className="flex space-x-1 mb-2 border-2 py-2 px-2 rounded-md bg-white">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    onClick={() => setActiveFilter(tab.label)}
                    className={`px-2 py-2 rounded-md text-sm font-medium flex items-center space-x-2 ${activeFilter === tab.label
                        ? 'bg-[#EAD9FF] text-purple-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                >
                    <span>{tab.key}</span>
                    <span className={`px-2 py-0.5 rounded-md text-xs ${activeFilter === tab.label
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