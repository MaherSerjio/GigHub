import React from 'react';

const Spinner = ({ message }) => {
    return (
        <div className="text-center">
            <div className="spinner-grow" role="status">
            </div>
            <h2 className="py-5">{message}</h2>
        </div>

    );
};


export default Spinner;