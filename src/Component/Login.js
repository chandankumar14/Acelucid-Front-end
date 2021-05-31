import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import axios from 'axios';

class Login extends React.Component{

// declearin constructor for stroing the state vaiable---->\
constructor(){
    super();
    this.state={
        show:true,
        email:'',
        password:''
    }
}
// handle event method
handlechange = (event, state) => {
    this.setState({ [state]: event.target.value });
}

/// close the modal and switch to home page
handleCancelLogin = () => {
    this.setState({ show: false });
    this.props.history.push("/");
}
//login method
login = () => {
    const { email, password} = this.state;
    const signUpObj = {
        email: email,
        password: password,
       
    };
    axios({
        method: 'POST',
        url: 'http://localhost:5000/sign',
        headers: { 'Content-Type': 'application/json' },
        data: signUpObj
    })
        .then(response => {
            if (response.data.isAuthenticated == true) {
                this.setState({
                    show: false,
                    email: '',
                    password: '',
                   });
               
            }
           
alert(response.data.message);
            this.props.history.push("/details");
        })
        .catch(err => console.log(err))
}

    render(){
        const {email, password} = this.state
        return(
            <div>
<Modal show = {this.state.show}>
    <Modal.Header>
        <Modal.Title>
        <h4 class="modal-title">Login</h4>
        
        </Modal.Title>
    </Modal.Header>


    <Modal.Body>

    <div class="modal-body">				
					<div class="form-group">
						<label>Username</label>
						<input type="text" class="form-control" required="required" 
                        value ={email} onChange ={(event)=>this.handlechange(event,'email')}/>
					</div>
					<div class="form-group">
						<div class="clearfix">
							<label>Password</label>
						
						</div>
						
						<input type="password" class="form-control" required="required" 
                        value = {password} onChange ={(event)=>this.handlechange(event,'password')}/>
					</div>
				</div>

    </Modal.Body>
    <Modal.Footer>
        
 <div class="modal-footer justify-content-between">
	<input type="button" class="btn btn-danger" value="cancel"
     onClick={this.handleCancelLogin} />
	<input type="submit" class="btn btn-primary" value="Login" 
   onClick={()=>this.login()}/>
</div>

    </Modal.Footer>
</Modal>



            </div>
        )
    } 
}

export default Login