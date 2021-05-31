import React from 'react'
import {Modal} from 'react-bootstrap';
import axios from 'axios'
import queryString from 'query-string';

class update extends React.Component{
// constructor declearing------>
constructor(){
    super()
    this.state={
        show:true,
        data:[],
        FirstName:'',
        LastName:'',
        email:'',
        contact:'',
       id:undefined
    }
}
// API call for data-------->
componentDidMount(){
     const queryParams = queryString.parse(this.props.location.search);
    const id= queryParams.userid;
    console.log(id);
    axios({
        method:"POST",
        url:"http://localhost:5000/findbyid",
        headers:{ 'Content-Type': 'application/json'},
        data: id
      })
      .then(
        res=> this.setState(
          {FirstName:res.data.FirstName,
            FirstName:res.data.LastName,
            FirstName:res.data.email,
            FirstName:res.data.contact,
            id :id
        }
       ) )
      .catch(err=> console.log(err))
}

handleChange = (event, state) => {
    this.setState({ [state]: event.target.value });
}
// update method is here--------->

update=()=>{
    const { FirstName, LastName,email,contact, id} = this.state;
    const Obj = {
        FirstName:FirstName,
        LastName:LastName,
        email: email,
        contact:contact,
       id :id
    };
    axios({
        method: 'PUT',
        url: 'http://localhost:5000/update',
        headers: { 'Content-Type': 'application/json' },
        data: Obj
    })
        .then(response => {
            if (response.data.message == 'Record update Sucessfully') {
                this.setState({
                    show: false,
                    FirstName: '',
                    LastName:'',
                    contact:'',
                    email:'',
                    id:''
                   });
               
            }
           

            this.props.history.push("/details");
        })
        .catch(err => console.log(err))
}


handleCancel = () => {
    this.setState({ show: false });
    this.props.history.push("/details");
}



    render(){
        
        return(
            <div>
            
    <Modal show = {this.state.show}>
    <Modal.Header>
        <Modal.Title >
       Update
        </Modal.Title>
    </Modal.Header>


    <Modal.Body>


    <div class="modal-body">

		<div class="form-group">
		<label>FirstName</label>
	   <input type="text" class="form-control" required="required"
       value={this.state.FirstName} onChange={(event) => this.handleChange(event, 'FirstName')} /> 
       
		</div>

   <div class="form-group">
	<label>LastName</label>
	<input type="text" class="form-control" required="required"
        value={this.state.LastName} onChange={(event) => this.handleChange(event, 'LastName')} />
       
		</div>

					<div class="form-group">
						<div class="clearfix">
							<label>Email-Address</label>
						</div>
						<input type="Email" class="form-control" required="required"
                         value={this.state.email} onChange={(event) => this.handleChange(event, 'email')}/>
                      
					</div>

          <div class="form-group">
			<label>Contact</label>
			<input type="text" class="form-control" required="required"
                 value={this.state.contact} onChange={(event) => this.handleChange(event, 'contact')} />
      
					</div>
				</div>




    </Modal.Body>
    <Modal.Footer>
          
 <div class="modal-footer justify-content-between">
	<input type="button" class="btn btn-danger" value="cancel"
     onClick={this.handleCancel()} />
<input type="submit" class="btn btn-primary" value="update"
    onClick={()=>this.update()} />	
</div>

    </Modal.Footer>
</Modal>


            
</div>
        )
    }
} 

export default update;