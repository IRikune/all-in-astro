
import { signal, useSignal } from "@preact/signals"
import { Input } from "./Input"
import type { newUser } from "../../../deno/types/mod"

enum Gender {
    male = "male",
    female = "female"
}
const error = signal()

export function Register() {
    const email = useSignal<string>("")
    const password = useSignal<string>("")
    const username = useSignal<string>("")
    const birthday = useSignal<number>(0)
    const gender = useSignal<Gender>(Gender.female)
    
    const data = {
        email: email.value,

    }

    const handleSubmit = (event:SubmitEvent) => {
        event.preventDefault();
        if (typeof event.currentTarget !== newUser) {
            

        }
        const form = event.currentTarget as HTMLFormElement;

        const formData = new FormData(form);
        console.log('formData:', formData);
        useRegister();
    }


        <main>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} method='POST' action='http://localhost:8000/login'>
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


    return (
        <form 
        onSubmit={handleSubmit}
        >
            <label for="email">
                <Input 
                value={email}
                onInput={(e) => {
                    const value = e.currentTarget?.value
                    email.value = value
                    console.log(email.value)
                }}
                placeholder="email"
                type="text"/>
            </label>
            <label for="password">
                <Input 
                placeholder="password"
                type="password"
                minLength={8}
                />
               
            </label>
            <label for="Username">
                <Input 
                placeholder="Username"
                type="text"/>
            </label>
            <label for="birthday">
                <Input 
                placeholder="birthday"
                type="date"/>
            </label>
            <label for="gender">
                <Input 
                placeholder="gender"
                type="checkbox"/>
            </label>
            <button type="submit">
                Submit
            </button>
            <div>
                {}
            </div>
        </form>
    )
}