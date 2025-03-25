export function Die(props){
    return(<button className={`die ${props?.isHeld ? "is-held" : ""}`}>
         <span>{props?.value}</span>
        </button>
    )
}