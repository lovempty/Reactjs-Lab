import React from 'react';

const Person = ({person}) => {
    return (
        <div>
            <h2>
                I am {person.last_name}
            </h2>
        </div>
    );
};

export default Person;