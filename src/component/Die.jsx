export function Die(props){
    return(<button onClick={()=>props.hold(props.id)} className={`die ${props?.isHeld ? "is-held" : ""}`}>
         <span>{props?.value}</span>
        </button>
    )
}