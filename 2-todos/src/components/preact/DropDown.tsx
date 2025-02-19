import { ProgressCircle } from "./ProgressCircle";
import { Avatar } from "./Avatar";
import { Button } from "./Button";
interface Props {
    class: string;
}
export function DropDown({ class: className }: Props) {
    return (
            <>
                <Button class={`peer p-1 h-9 w-fit relative justify-between  ${className}`}>
                    <div class="flex items-center">
                        <ProgressCircle
                            tasks={8}
                            progress={7}
                            class="overflow-hidden items-center"
                            >
                            <Avatar class="w-7 h-7 rounded-full -z-10" seed="HOLAAA" />
                        </ProgressCircle>
                        <span class="ml-1">Nander</span>
                    </div>
                </Button>
                <Drops class={"invisible peer-focus:visible"}/> 
                
            </>
    )   
} 
interface Propss {
    class?: string;
}
function Drops({class: className}: Propss) {
    return <>
        <div  class={`absolute p-1.5 top-10 z-10 w-96 h-96 overflow-ellipsis border-2 bg-white rounded-md ${className}`}>
            <ul>
                <li>hola       </li>
                <li>adios      </li>
                <li>bienvenido </li>
                <li>fuera      </li>
            </ul>
        </div>
    
    </> 
}