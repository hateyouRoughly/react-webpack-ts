import React, { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom";
import { contextReducer } from "@/contextApi";

const Middleware = ({ active }: { active: boolean }) => {
    const { state, dispatch } = contextReducer();
    const navigate = useNavigate();

    useEffect(() => {
        if(active && !state?.token){
            dispatch({
                type: "REMOVE_STATE",
                payload: 'profile'
            })
            navigate("/login");
        }else{
            //get data from API and then set
            dispatch({
                type: "SET_STATE", 
                payload: { profile: {
                    first_name: "liam",
                    last_name: "walters",
                    email: "liam.walters@example.com",
                } }
            })
        }
    }, [state?.token, navigate]);

    return <Outlet />
}

export default Middleware;