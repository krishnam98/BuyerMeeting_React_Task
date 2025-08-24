import { useState } from "react";

// Sample participants data
const participants = [
    { id: 1, name: "Mohd Saleem", role: "Buyer, Sales" },
    { id: 2, name: "Mohd Saleem", role: "Sales, Merchandiser" },
    { id: 3, name: "Mohd Saleem", role: "Admin, Admin" },
    { id: 4, name: "Mohd Saleem", role: "Admin, CEO" },
];

// Participants Tooltip Component
const ParticipantsTooltip = ({ isVisible, position }) => {
    if (!isVisible) return null;

    return (
        <div
            className="absolute z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-[250px] pointer-events-none"
            style={{
                left: position.x,
                top: position.y,
                marginTop: '-8px'
            }}
        >
            <div className="space-y-2 bg-white z-50">
                {participants.map((participant, index) => (
                    <div key={index} className="flex items-center space-x-2 z-50">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-medium z-50">
                            M
                        </div>
                        <div className="flex-1 bg-white z-50">
                            <div className="text-sm font-medium text-gray-900">
                                {participant.name}
                            </div>
                            <div className="text-xs text-gray-500">
                                {participant.role}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ParticipantsTooltip;