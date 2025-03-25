export function Die(props){
    return(<button  
        aria-label={`Die with value ${props.value}, 
        ${props.isHeld ? "held" : "not held"}`} 
        aria-pressed={props.isHeld}
        onClick={()=>props.hold(props.id)} className={`die ${props?.isHeld ? "is-held" : ""}`}>
         <span>{props?.value}</span>
        </button>
    )
}