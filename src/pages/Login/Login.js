import {Button, Form} from "react-bootstrap";
import FormInput from "../../components/FormInput";
import React from "react";
import {useNavigate} from "react-router-dom";

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
                    type="text"
                    placeholder="Pass..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant={"success"}  onClick={() => onLogin(email, password, setIsLogedIn, navigate)} />
            </Form>
        </div>
    )
}

export default Login