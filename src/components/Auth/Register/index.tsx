import React, { FormEvent, useCallback } from "react"
import BootstrapForm from "@/components/BootstrapForm"

const Register = () => {
    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }, [])

    return (<BootstrapForm type="Register" onSubmit={onSubmit} />)
}

export default Register;