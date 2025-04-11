import { signal } from "@preact/signals";
import { login } from "../../api/auth";

const handleSubmit = (event:SubmitEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    login(formData);
}
export const error = signal("")
    
export function FormLogin(){
    return (
      
        <main>
            <h1>Login</h1>
            <form onSubmit={(e)=>handleSubmit(e)} method='POST' action='http://localhost:8000/login'>
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" required />
                <label for="password">Password:</label>
                <input class="invalid:border-red-500" type="password" id="password" name="password" minLength={8} required />
                <button class='enviar' type="submit" >Login</button>
            </form>

            <h1 class="text-2xl text-red-600 italic">
                {error}
            </h1>
            <div id="status"/>
        </main>
    )

}