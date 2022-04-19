import React from 'react';
import {Route,Redirect} from "react-router-dom";

function ProtectedRoute1({
    component:Component,
    ...rest
}){
    return (
        <Route
        {...rest}
        render={(props)=>
            localStorage.getItem("fac_id")?(
                <Component {...props}/>
            ):(
                <Redirect to={{
                    pathname:"/login",
                    state:{from:props.location}
                 }}
                />
            )
        
        }
        />
    );

}


export default ProtectedRoute1;