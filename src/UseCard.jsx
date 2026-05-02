import ComponentName from "./ComponentName";
export default function UseCard(props){
    return(
        <div>
           
            <p>HI I am {props.name} from {props.city}</p>
        </div>
    );
}