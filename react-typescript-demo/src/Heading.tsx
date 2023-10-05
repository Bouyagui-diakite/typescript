import React from 'react';

type HeadingText = {
    children : string
}

const Heading = (props: HeadingText) => {
    return (
       <h2>{props.children}</h2>
    );
};

export default Heading;