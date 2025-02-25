import { Priority } from "../../../deno/types/mod"
import { Icon } from "./icons/Icon"

interface Props{
    priority: Priority
}
export function Checker({priority}:Props){
    const bg = {
        1 : 'grey',
        2 : 'blue',
        3 : '#FF5733',
        4 : '#FF5733'
    }
  
    const varia = `background: ${bg[priority]}50;
                    border: 2px solid ${bg[priority]};
                    color:${bg[priority]}`
    console.log(varia)
    
    return (
        <div class={"w-full h-full rounded-full  hover:*:visible "} style={varia}>
            <Icon name="check" class="invisible"></Icon>
        </div>
    )
} 


