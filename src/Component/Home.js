import React from 'react';


class Home extends React.Component{


    login =()=>{
        this.props.history.push("/login");
    }

    signup =()=>{
        this.props.history.push("/signup");
    }

    render(){
        return(
            <div>




<nav class="navbar navbar-expand-sm bg-info navbar-light">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#">React</a>
    </li>

  
<li class="nav-item">
  <a onClick ={()=>this.signup()}  class="nav-link">
    <span class="glyphicon glyphicon-user"></span> Sign-up</a>
  </li>
<li class="nav-item">
  <a onClick={()=>this.login()}  class="nav-link">
    <span class="glyphicon glyphicon-log-in"></span> Login</a>
</li>
  </ul>
 

</nav>




















            </div>
        )
    }
}
export default Home