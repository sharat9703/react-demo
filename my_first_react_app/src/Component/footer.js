import React from "react";

const Footer = (props)=>{
    return(
        <>
            <hr/>
            <center>&copy; Sharat's Lab, {props.year} {props.month}</center>
        </>
    )
}

export default Footer;