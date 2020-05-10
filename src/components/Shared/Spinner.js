import React from 'react';

const Spinner = () => {
    return (
        <div className="text-center">
            <span className="sr-only ">Loading...</span>
            <div className="spinner-grow" role="status">
            </div>
        </div>
    );
};


export default Spinner;