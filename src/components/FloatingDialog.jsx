import React from 'react';

const CopyMailDialog = React.forwardRef(({ email, onYes, onNo, style }, ref) => (
    <div
        ref={ref}
        style={style}
        className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 z-50 w-72 sm:w-80 lg:w-96"
    >
        <div className="flex items-center gap-2 flex-wrap">
            <div className="text-sm text-gray-700">
                Copy {email} to clipboard?
            </div>
            <div className="flex gap-2">
                <button
                    onClick={onYes}
                    className="px-2 py-1 text-black border border-transparent hover:border-gray-800 rounded text-sm"
                >
                    Yes
                </button>
                <button
                    onClick={onNo}
                    className="px-2 py-1 text-black border border-transparent hover:border-gray-800 rounded text-sm"
                >
                    No
                </button>
            </div>
        </div>

        {/* Speech Bubble Arrow */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-200" />
    </div>
));

export default CopyMailDialog;
