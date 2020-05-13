import React from 'react';

const Error = ({ message }) => {
    return (
        <div className="text-center py-4 bg-danger text-white" role="alert">
            <h4 className="alert-heading">{message}</h4>
        </div>
    );
};

export default Error;