import React,{Component} from "react";
import './header.css'  
class Header extends Component{
constructor(){
    super();
    this.state={
    title:"React Here!",
    text:"User text here!"
    }
    
}

 handleChange=(event)=>{
//console.log(event.target.value);
this.setState({text:event.target.value?event.target.value:"User text here!"});
this.props.UserInput(event.target.value);
}

render(){

    return(
        <div>
            <div>
               <header>
               <h2 className="logo">{this.state.title}</h2>
                <input onChange={this.handleChange}/>
                <p className="logo">{this.state.text}</p>
                </header> 
            </div>
            <center>
                <h1>Hello React!!!!!</h1>
            </center>
            <hr/>
        </div>
    )
}

}


/*const Header = ()=>{
    return (
        <>
            <center><h1>Hello React!!</h1></center>
            <hr/>
        </>
    )
}
*/
export default Header;

/*well,instead of <div></div> <></> can be used, but only to wrap things but you can't target that div*/