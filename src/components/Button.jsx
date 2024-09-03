export default function Button(props){
    return (
        <button className="nextButton" onclick={props.fun}>{props.text}</button>
    )
    
}
