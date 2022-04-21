import { Signup } from "./Signup";
import { AuthContext } from "../Contexts/AuthContsxt";
import { useContext } from "react";


export const Navbar=()=>{
    const { toggleAuth }=useContext(AuthContext);

    
return (<nav  style={{
    border:"1px solid teal",
    height:"40px",
    backgroundColor:"coral",
    display:"flex",
    justifyContent:"end",
    fontSize:"20px",
    padding:"15px",
    gap:"20px",
    color:"teal"
}}>

<button onClick={()=>{toggleAuth(`Login Successfully    Token no -${Math.floor(Math.random()*100)}`)}}>Login</button>
<button onClick={()=>{
    toggleAuth("Login First");
}}>Logout</button>
</nav>)


}