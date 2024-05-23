import Button from "../globals/Button";
import { useRef } from "react";

export default function RegisterForm() {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);


    function handleSubmit(event:{preventDefault:()=>void}){
        event.preventDefault();

        console.log("submitted", emailRef.current?.value, passwordRef.current?.value)
    }

    return <div>
            <h3>RegisterForm</h3>
            <form>
                <label htmlFor="email">Email</label><br/>
                <input type="email" id="email" name="email" ref={emailRef} /><br/>
                <label>password</label><br/>
                <input type="text" name="password" id="password" ref={passwordRef}/><br/>
                
            </form>
            
            </div>
    
}
