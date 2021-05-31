import React from 'react';
import { Modal} from 'react-bootstrap';
import axios from 'axios';
class Registration extends React.Component{

// declearin constructor for stroing the state vaiable---->\
constructor(){
    super();
    this.state={
        show:true,
        email:'',
       FirstName:'',
       LastName:'',
       contact:''
    }
}


handleCancelLogin = () => {
    this.setState({ show: false });
    this.props.history.push("/");
}

// 
handlechange = (event, state) => {
    this.setState({ [state]: event.target.value });
}


// 

Registr = () => {
    const { FirstName, LastName,email,contact} = this.state;
    const signUpObj = {
        FirstName:FirstName,
        LastName:LastName,
        email: email,
        contact:contact
       
    };
    axios({
        method: 'POST',
        url: 'http://localhost:5000/Regs',
        headers: { 'Content-Type': 'application/json' },
        data: signUpObj
    })
        .then(response => {
            if (response.data.message == 'Registration has been done successfully') {
                this.setState({
                    show: false,
                    FirstName: '',
                    LastName:'',
                    contact:'',
                    email:''
                   });
               
            }
           

            this.props.history.push("/details");
        })
        .catch(err => console.log(err))
}

    render(){
        const {FirstName,LastName,email,contact} = this.state;
        return(
            <div>
<Modal show = {this.state.show}>
    <Modal.Header>
        <Modal.Title >
       Registration
        </Modal.Title>
    </Modal.Header>


    <Modal.Body>


    <div class="modal-body">

					<div class="form-group">
						<label>FirstName</label>
						<input type="text" class="form-control" required="required"
                         value ={FirstName} onChange ={(event)=>this.handlechange(event,'FirstName')} />
					</div>

          <div class="form-group">
						<label>LastName</label>
						<input type="text" class="form-control" required="required"
                         value ={LastName} onChange ={(event)=>this.handlechange(event,'LastName')} />
					</div>

					<div class="form-group">
						<div class="clearfix">
							<label>Email-Address</label>
						</div>
						<input type="Email" class="form-control" required="required"
                         value ={email} onChange ={(event)=>this.handlechange(event,'email')} />
					</div>

          <div class="form-group">
						<label>Contact</label>
						<input type="text" class="form-control" required="required" 
                         value ={contact} onChange ={(event)=>this.handlechange(event,'contact')}/>
					</div>

				</div>

    </Modal.Body>
    <Modal.Footer>
        
 <div class="modal-footer justify-content-between">
	<input type="button" class="btn btn-danger" value="cancel"
     onClick={this.handleCancelLogin} />
<input type="submit" class="btn btn-primary" value="Registr"
    onClick={()=>this.Registr()} />	
</div>

    </Modal.Footer>
</Modal>



            </div>
        )
    } 
}

export default Registration