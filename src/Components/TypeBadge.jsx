const TypeBadge = ({ type }) => {
    return (
        <span className={`px-3 py-1 rounded-md text-xs font-medium border ${type === 'Online'
            ? 'bg-[#B8EECC] text-[#29B95F] border-green-800'
            : 'bg-[#D9D9D9] text-[#676767] border-gray-800'
            }`}>
            {type}
        </span>
    );
};

export default TypeBadge;