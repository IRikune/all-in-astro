import { useState } from "preact/hooks";
import { Button } from "./Button";
import { Icon } from "./icons/Icon";
interface Props {
    class: string;
    children:string;
}
export function DropDown({ children, class: className }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    let useClickOutside = () => setIsOpen(!isOpen);
    return (
            <>
                <button class={`h-4 w-4 p-0 relative ${className} `} onMouseOver={useClickOutside} onMouseOut={useClickOutside}>
                    {children}
                    
                    <Icon name="bell" class="w-full h-full "></Icon>
                    
                    {
                        isOpen && <Drops/>
                    }
                    
                </button>
            </>
    )   
} 
function Drops(){
    return <>
        <div  class={"absolute z-10 w-24 h-24 border-2 bg-amber-50 rounded-md "}>
            <ul>
                <li>hola       </li>
                <li>adios      </li>
                <li>bienvenido </li>
                <li>fuera      </li>
            </ul>
        </div>
    
    </> 
}