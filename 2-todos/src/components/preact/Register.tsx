import { signal } from "@preact/signals"
import { Input } from "./Input"

enum Gender {
    male = "male",
    female = "female"
}

export function Register() {
    
    const handleSubmit = (event:SubmitEvent) => {
        event.preventDefault();
        const form = event.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        console.log('formData:', formData);
        
    }

    return (
        <form 
        onSubmit={handleSubmit}
        >
            <label for="email">
                <Input
                placeholder="email"
                type="email"/>
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