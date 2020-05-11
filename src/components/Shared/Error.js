import React from 'react';

const Error = (props) => {
    return (
        <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Error</h4>
            <p>{props.message}</p>
        </div>
    );
};

export default Error;