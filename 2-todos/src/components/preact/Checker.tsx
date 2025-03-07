import { Priority } from "../../../deno/types/mod"
import { Icon } from "./icons/Icon"

interface Props{
    priority: Priority
    class:string
}
export function Checker({priority,class:className}:Props){
    const bg = {
        1 : '#c0392b',
        2 : '#FF5733',
        3 : '#2980b9',
        4 : '#bdc3c7'
    }
  
    const varia = `background: ${bg[priority]}50;
                    border: 2px solid ${bg[priority]};
                    color:${bg[priority]}`
    
    return (
        <div class={`w-[18px] h-[18px] cursor-pointer rounded-full flex align-middle hover:*:visible items-center justify-center ${className}`} style={varia}>
            <Icon name="check" class="invisible w-3.5 left-0.5 "></Icon>
        </div>
    )
} 


