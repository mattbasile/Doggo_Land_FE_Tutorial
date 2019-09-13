import React,{useState} from 'react'
import {withRouter} from "react-router-dom";
import Doggo from "../media/shep.jpg"

function LoginPage(props) {
    const [registerView, setRegisterView ] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [kennelName, setKennelName] = useState("");  
    const dog_img ={
            background:`lightblue url(${Doggo}) no-repeat center center`,
            backgroundSize: "cover",
            height: "auto",
            borderRadius: "7px 0px 0px 7px"
    }
    const loginForm ={
            height: "700px",
            width: "75%",
            margin: "50px auto",
            background: "#D7ECFF",
            borderRadius: "7px",
            boxShadow: "3px 7px 4px rgba(0, 0, 0, 0.25)",
    }
    const toggleView=(value)=>{
        setRegisterView(value);
        setUserName("");
        setPassword("");
        setKennelName("");
    }
    return (
        <section style={loginForm} className="flex mb-16 mt-4 h-auto">
            <div style={dog_img} className="w-1/2"></div>
            {!registerView ? 
            <form className=" w-1/2 flex flex-col">
                <h3 className="text-center text-3xl body-font font-bold text-blue-900 mt-16">Thank you for helping us find homes!</h3>
                <label className="mt-16 mb-4 body-font font-bold text-2xl text-blue-900  px-16">Login</label>
                <label className=" px-16 block text-blue-900 text-sm font-semibold mb-2">Username:</label>
                <input onChange={e => setUserName(e.target.value)} name="username" className="mx-16 rounded p-2 mb-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                <label className=" px-16 block text-blue-900 text-sm font-semibold mb-2 ">Password:</label>
                <input onChange={e => setPassword(e.target.value)} name="password" className="mx-16 rounded p-2 mb-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password"/>
                <p onClick={()=>toggleView(true)} className="cursor-pointer text-center underline italic font-medium text-xl text-blue-900 hover:text-blue-700">Need to Register?</p>
                <button onClick={()=>props.history.push("/dashboard/1")}className="bg-white px-16 mt-8 text-2xl font-bold py-1 rounded mx-auto text-blue-900 hover:text-white hover:bg-blue-900">Submit</button>
            </form>
            :
            (<form className=" w-1/2 flex flex-col ">
                <h3 className="text-center text-3xl body-font font-bold text-blue-900 mt-16">Thank you for helping us find homes!</h3>
                <label className="mt-16 mb-4 body-font font-bold text-2xl text-blue-900  px-16">Register</label>
                <label className=" px-16 block text-blue-900 text-sm font-semibold mb-2">Username:</label>
                <input onChange={e => setUserName(e.target.value)} name="username" className="mx-16 rounded p-2 mb-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                <label className=" px-16 block text-blue-900 text-sm font-semibold mb-2 ">Password:</label>
                <input onChange={e => setPassword(e.target.value)} name="password" className="mx-16 rounded p-2 mb-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password"/>
                <label className=" px-16 block text-blue-900 text-sm font-semibold mb-2 ">Kennel Name:</label>
                <input onChange={e => setKennelName(e.target.value)} name="kennel_name" className="mx-16 rounded p-2 mb-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                <p onClick={()=>toggleView(false)} className="cursor-pointer text-center underline italic font-medium text-xl text-blue-900 hover:text-blue-700">Already Registered?</p>
                <button  onClick={()=>props.history.push("/dashboard/1")} className="bg-white px-16 mt-8 text-2xl font-bold py-1 rounded mx-auto text-blue-900 hover:text-white hover:bg-blue-900">Register</button>
            </form>)
            }
    </section>
    )
}
export default withRouter(LoginPage)