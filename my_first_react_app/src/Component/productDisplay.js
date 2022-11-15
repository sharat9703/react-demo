import React from "react";
import './product.css';
const prodDisplay = (props)=>{
    console.log(props);
    const renderProduct=props.prodData.map((item)=>{
        let str = item.description;
        let str1 = str.split('(');
        return(
            <div className="card">
                <img src={item.image} alt={str1[0]}/>
              <div>
              <h1>{str1[0]}</h1>
              <p>{item.description}</p>
              <p>Rs {item.new_price}</p>
                </div>     
            </div>
        )
    })
    return (
       <div className="main">
        {renderProduct}
       </div>
    )
}

export default prodDisplay;