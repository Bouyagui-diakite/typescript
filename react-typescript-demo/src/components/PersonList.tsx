
import { Name } from "./Person.type";

type personListProps = {
    names:Name[]
}

const PersonList = (props: personListProps) => {
    return (
        <div>
            {props.names.map(name =>{
                return (
                    <h2 key={name.first} >
                        {name.first} {name.last}
                    </h2>
                )
            })}
           
        </div>
    );
};

export default PersonList;