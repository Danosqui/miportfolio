import React from 'react';

const CustList = ({ children }) => {
    return (
        <ul className="list-disc space-y-2.5 text-justify pl-5">
            {React.Children.map(children, (child, idx) => (
                <li key={idx}>{child}</li>
            ))}
        </ul>
    );
};

export default CustList;