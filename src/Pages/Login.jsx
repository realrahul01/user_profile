import LoginForm from "../components/LoginForm/LoginForm";

const Login = ()=>{
    return(
        <div>
            <h2 style={{ fontWeight: 800, textAlign: "center",fontStyle:'italic'}}>
                Add <span style={{ color: "red"}}>user</span>
            </h2>
            <LoginForm/>
        </div>
    )
}
export default Login;