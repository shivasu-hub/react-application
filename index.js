import React from 'react';
import ReactDOM from 'react-dom';
  // import Somthing from './App.js';
import Shivam from './componets';
import './index.css';



// import Text from './text.js';
class Tipci extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Billamount:'',
      username:'',
      custname:[],
      service:'',
      tip:'',
      totaltip:''

     
    };
  }
  myBillamount = (event) => {
    this.setState({Billamount : event.target.value});
  }
  myserviceHandler = (event)=> {
    
   this.setState({service : event.target.value});
  }
  myCustomerlist = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
   
    this.setState({[nam]:val});
  }
  handleClick=()=>{

    this.setState({custname:[...this.state.custname, this.state.username  ]})
  }
  calculatTip = (event) =>{
    event.preventDefault();
   

    let tipP = parseFloat(this.state.Billamount*this.state.service).toFixed(2);
    let totaltipP = parseFloat(tipP/this.state.username.length).toFixed(2)
    
    
    this.setState({ 
      tip:tipP,
      totaltip:totaltipP
    })

  }

render(){
return(
  <div id="main">
  <Shivam name="kapil "details={{name:'Borade'}} father='AJay'/>
  <div id='abc'>
   <h1>Tip calculator</h1>
   <h3>Build in react</h3>
  </div>
 
   <h2>Enter your Bill amount</h2>
   <input id="inpt"type="text" value={this.state.Billamount} onChange={this.myBillamount} />

   <hr/>
   <p>How was the service</p>
   <select id="select" value={this.state.service} onChange={this.myserviceHandler}>
   <option disabled selected>Choose service</option>
     <option value="0.2">Excellent(20%)</option>
     <option value="0.1">gud(10%)</option>
     <option value="0.05">bad(5%)</option>
   </select>
   
   <input type="text" id="cname" value={this.state.username} name="username" onChange={this.myCustomerlist} placeholder="customer name"/>
   <input type="button" class="btn" value='add customer' onClick={()=>{this.handleClick()}} />
   
   <hr/>
   <h2>Customer List</h2>
   <ul>
     {this.state.custname.map(item=> <li>{item}  is offering a tip of rupees {this.state.totaltip}</li>)}
   </ul>
   <button class="btn btn-outline-primary" onClick={this.calculatTip}>calculate Tip & customer</button>
 
   <table>
   <tr>
      <td>Tip</td>
      <td>Per Person</td>
      
   </tr>
   <tr>
      <td>{this.state.tip}</td> 
      <td>{this.state.totaltip}</td> 
   </tr>

   </table>
  </div>)
 }
}
ReactDOM.render(<Tipci/>,document.getElementById('root'))









  
   
    
  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
