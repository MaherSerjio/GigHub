import React from 'react';

const Spinner = (props) => {
    return (
        <div className="text-center">
            <div className="spinner-grow" role="status">
            </div>
            <h2 className="py-5">{props.message}</h2>
        </div>

    );
};


export default Spinner;