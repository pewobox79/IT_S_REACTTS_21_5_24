import LoginForm from "../compontents/Forms/LoginForm";
import RegisterForm from "../compontents/Forms/RegisterForm";

export default function LoginPage() {
    return (
        <div><h1>Login</h1>
            <LoginForm />
            <hr/>
            <RegisterForm/>
        </div>
    )
}
