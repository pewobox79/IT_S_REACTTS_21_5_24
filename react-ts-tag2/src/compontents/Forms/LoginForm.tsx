
import { useState } from "react"

const INIT_VALUES = {
    username: "",
    password: ""
}

export default function LoginForm() {
    
    const [user, setUser]=useState(INIT_VALUES)
    const [submitted, setSubmitted] = useState(false)


    function handleChange(event:{target:{name: string, value: string}}){
        setUser({...user,[event.target.name]: event.target.value})
    }

    console.log("user", user)

    function handleSubmit(event:{preventDefault: ()=>void}){
        event.preventDefault()
        console.log("user submitted", user)
        setSubmitted(true)
        setUser(INIT_VALUES)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label><br />
                <input
                    id="username"
                    type="text"
                    placeholder="your username"
                    name="username"
                    onChange={handleChange}
                    value={user.username}
                /><br />

                <label htmlFor="password">Password</label><br />
                <input
                    id="password"
                    name="password"
                    placeholder="password" 
                    onChange={handleChange}
                    value={user.password}/><br />
                <button type="submit">login</button>

            </form>
            {submitted && <p style={{backgroundColor: "green", color: "black"}}>Data successfully submitted</p>}
        </div>
    )
}
