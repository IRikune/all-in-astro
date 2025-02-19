import { Button } from "./Button";
import { Icon } from "./icons/Icon";
interface Props {
    class: string;
}
export function DropDown({ class: className }: Props) {
   
    return (
            <>
                <Button class={` p-0 relative justify-between *:first: *:last:invisible focus:*:last:visible ${className}`}  >
                    <Drops/>

                </Button>
            </>
    )   
} 
function Drops(){
    return <>
        <div  class={"absolute block p-1.5 top-10 z-10 w-96 h-96 overflow-ellipsis border-2 bg-white rounded-md "}>
            <ul>
                <li>hola       </li>
                <li>adios      </li>
                <li>bienvenido </li>
                <li>fuera      </li>
            </ul>
        </div>
    
    </> 
}