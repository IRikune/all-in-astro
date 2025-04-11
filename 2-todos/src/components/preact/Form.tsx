import { signal } from "@preact/signals";
import { useLogin } from "../../hooks/mod";
const handleSubmit = (event:SubmitEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    useLogin(formData);
}
export const error = signal("")
    
export function FormLogin(){
    return (
        <main>
            <h1>Login</h1>
            <form onSubmit={(e)=>handleSubmit(e)} method='POST' action='http://localhost:8000/login'>
                <label for="email">Email:</label>
                <input class={"peer block w-50 rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm  invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500  valid:border-emerald-400  " } type="email" id="email" name="email" pattern=".+@gmail\.com" required />
                <div class={"invisible peer-invalid:visible"}>intronce un correo valido</div>
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