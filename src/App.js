
import React from 'react';
import '../src/App.css';

function component(){
  return(
    <div>
<div class="text-center">

	<a href="#myModal" class="trigger-btn" data-toggle="modal">Click to Open Login Modal</a>
</div>


<div id="myModal" class="modal fade">
	<div class="modal-dialog modal-login">
		<div class="modal-content">
			<form >
				<div class="modal-header">				
					<h4 class="modal-title">Login</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">				
					<div class="form-group">
						<label>Username</label>
						<input type="text" class="form-control" required="required" />
					</div>
					<div class="form-group">
						<div class="clearfix">
							<label>Password</label>
						
						</div>
						
						<input type="password" class="form-control" required="required" />
					</div>
				</div>
				<div class="modal-footer justify-content-between">
					<input type="button" class="btn btn-danger" value="cancel" />
					<input type="submit" class="btn btn-primary" value="Login" />
				</div>
			</form>
		</div>
	</div>
</div>     



    </div>
  );

}
export default component;