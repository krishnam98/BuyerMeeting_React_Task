const StatusBadge = ({ status }) => {
    const getStatusStyle = (status) => {
        switch (status) {
            case 'Completed':
                return 'bg-[#29B95F] text-white ';
            case 'Upcoming':
                return 'bg-[#FAB020] text-white';
            case 'Follow-up':
                return 'bg-[#277DFF] text-white ';
            case 'Re-scheduled':
                return 'bg-[#8210FB] text-white';
            case 'Overdue':
                return 'bg-[#D30A0D] text-white';
            case 'In Progress':
                return 'bg-[#EA6E32] text-white ';
            case 'Ongoing':
                return 'bg-[#000000] text-white';
            case 'Draft':
                return 'bg-[#676767] text-white';
            case 'Archived':
                return 'bg-[#FAC4C5] text-[#D30A0D] border-red-200';
            default:
                return 'bg-gray-100 text-white border-gray-200';
        }
    };

    return (
        <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${getStatusStyle(status)} ${status === 'Follow-up' || status === 'In Progress' ? 'flex items-center justify-between w-fit' : 'inline-block'}`}>
            <span>{status}</span>
            {status === 'Follow-up' && (
                <>
                    <img src="icons/Vector.svg" alt="follow-up" className="w-4 h-4 px-1" />
                    <span>(3)</span>
                </>
            )}

            {status === 'In Progress' && (
                <>
                    <img src="icons/inProgress.svg" alt="inProgress" className="w-5 h-5 px-1" />
                    <span>(1/3)</span>
                </>
            )}

        </span>
    );
};

export default StatusBadge;