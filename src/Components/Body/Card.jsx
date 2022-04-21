import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContsxt";

export const Body=()=>{
const { isAuth }=useContext(AuthContext);

return (<div style={{
height:"300px",
width:"300px",
backgroundColor:"teal",
color:"coral",
fontSize:"40px",
margin:"30px"
    
}}>
    {isAuth}
</div>)

}