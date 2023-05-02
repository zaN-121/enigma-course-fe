import {Button, Form} from "react-bootstrap";
import FormInput from "../../components/FormInput";
import React from "react";
import {useNavigate} from "react-router-dom";
import useMutation from "../../hooks/useMutation";
import {login} from "../../service/authService";
import {setToken} from "../../utils/token";
import useLogin from "../../hooks/useLogin";

const onLogin = (email, password, setIsLogedIn, navigate) => {
    const e = 'email@gmail.com'
    const p = '123456'
    if (email == e && p == password) {
        setIsLogedIn(true)
    }
    navigate('/course-list')
}



const Login = ({setIsLogedIn}) => {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const {onLogin, loading} = useLogin(login, {
        onSuccess: (response) => {
            setToken(response.data)
            navigate("/course-list")
        },
        onError: (e) => {
            console.log(e)
        }
    })

    const onSubmit = () => {
        onLogin({email, password})
    }
    return (
        <div>
            <h1>Login Page</h1>
            <Form >
                <FormInput
                    label="Username"
                    type="text"
                    placeholder="email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormInput
                    label="Password"
                    type="password"
                    placeholder="Pass..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant={"success"} disabled={loading}  onClick={() => onSubmit()} >Login</Button>
            </Form>
        </div>
    )
}

export default Login