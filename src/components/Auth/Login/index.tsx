import React, { FormEvent, useCallback } from "react"
import BootstrapForm from "@/components/BootstrapForm"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "@/reactRedux/counterSlice";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(login("fa1b865d9280d4a488afa30fd60216e7"));
        navigate("/");
    }, [])

    return (<BootstrapForm type="Login" onSubmit={onSubmit} />)
}

export default Login;