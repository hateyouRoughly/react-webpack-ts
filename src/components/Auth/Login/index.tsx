import React, { FormEvent, useCallback } from "react"
import BootstrapForm from "@/components/BootstrapForm"
import { contextReducer } from "@/contextApi"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { state, dispatch } = contextReducer();
    const navigate = useNavigate();
    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({
            type: "LOGIN",
            payload: "fa1b865d9280d4a488afa30fd60216e7"
        });
        navigate("/");
    }, [])

    return (<BootstrapForm type="Login" onSubmit={onSubmit} />)
}

export default Login;