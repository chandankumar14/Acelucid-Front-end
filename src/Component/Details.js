import React from 'react';
import axios from 'axios';


class Details extends  React.Component{

// Declearing constuctor for storing the state variable------>
constructor(){
  super();
this.state={
Record:[],
show:false,
data:[]
}
}
// API call for data binding-------->
componentDidMount(){

axios({
  method:"GET",
  url:"http://localhost:5000/records",
  headers: { 'Content-Type': 'application/json' }
})
.then(res=> this.setState(
   {Record:res.data.record}
)).
catch(err=> console.log(err))

}
// method for modal hadling---->
handleCancelupdate=()=>{
  this.setState({show:false})
}

// method for open the modal---->
handleClick=(id)=>{
 const Id =id; 
  this.props.history.push(`/userupdatePage/?userid=${Id}`);

}





    render(){
      const {Record,} = this.state;
        return(
            <div>
<h4 style={{backgroundColor:'#4d8a9e', textAlign:'center',
fontFamily:'sans-serif', height:'60px',paddingTop:'10px'}}>
    User Details Page---------</h4>




    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Email-Address</th>
      <th scope="col">Contact</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  {Record.map(item=>{return(
  <tbody>
    <tr>
      <td>{item.FirstName}</td>
      <td>{item.LastName}</td>
      <td>{item.email}</td>
      <td>{item.contact}</td>
     <td>
     <button type="button" class="btn btn-success" onClick={() => this.handleClick(item._id)}>Edit</button>
     </td>
    </tr>
  </tbody>
  )})}
</table>




            </div>
        )
    }
}

export default Details