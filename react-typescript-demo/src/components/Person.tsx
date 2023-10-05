import React from 'react';
import { personName } from './Person.type';

const Person = (props: personName) => {
    return (
        <div>
            <h2>
            Hello {props.name.first} {props.name.last}
            </h2>
        </div>
    );
};

export default Person;