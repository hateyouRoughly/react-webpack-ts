import React, { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeState, setState } from "@/reactRedux/counterSlice";

const Middleware = ({ active }: { active: boolean }) => {
    const token = useSelector((state: any) => state.counter.token);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        if(active && !token){
            dispatch(removeState('profile'));
            navigate("/login");
        }else{
            //get data from API and then set
            dispatch(setState({
                profile: {
                    first_name: "liam",
                    last_name: "walters",
                    email: "liam.walters@example.com",
                }
            }))
        }
    }, [token, navigate]);

    return <Outlet />
}

export default Middleware;