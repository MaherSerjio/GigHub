import React from 'react';

const Error = (props) => {
    return (
        <div className="text-center py-4 bg-danger text-white" role="alert">
            <h4 className="alert-heading">{props.message}</h4>
            <p>Try again later :(</p>
        </div>
    );
};

export default Error;