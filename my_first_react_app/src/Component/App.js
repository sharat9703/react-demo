import React,{Component} from 'react';
import Footer from './footer';
import Header from './header';
import ProdDisplay from './productDisplay';
import JSON from './db.json'; 

class App extends Component {
    constructor(){
        super();
this.state={
    productData:JSON,
    filteredData:JSON
}
    }

filterData = (keyword)=>{
let output = this.state.productData.filter((data)=>{
    return (data.category_name.toLowerCase.indexOf(keyword.toLowerCase())>-1);

})
this.setState({filteredData:output});
}


    render(){
        return(
            <div>
                <Header UserInput={(data)=>{this.filterData(data)}}/>
                <ProdDisplay prodData = {this.state.productData}/>
                <Footer year="2022" month="Nov"/>
            </div>
        )
    }
    
}

export default App;