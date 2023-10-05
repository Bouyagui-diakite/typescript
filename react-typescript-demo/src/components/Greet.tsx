import React from 'react';
type GreetProps = {
    name: string;
    messageCount?: number; //optional
    isLoggedIn: boolean;
}

const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props;
    return (
        <div>
           
            <h1 className="text-3xl font-bold underline">
                {
                    props.isLoggedIn ? `Bienvenu ${props.name}, You have ${messageCount} messages rendered.` : `Bienvenue`
                }

            </h1>
                
                
        
        </div>
    );
};

export default Greet;