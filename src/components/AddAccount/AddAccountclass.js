import React, { Component } from "react";
import { useNavigate } from "react-router";

class AddAccount extends Component{
state = {
    newAccount : {
        id:"",name :"",lastname:"",phone:"",email:""
    }
}

changeHandler = (event) =>{
    let id = event.target.id;
    let newAccountCopy = {...this.state.newAccount};
    newAccountCopy[id]=event.target.value;
    this.setState({newAccount:newAccountCopy});
}

/* componentDidUpdate(){
    console.log(this.state.newAccount);
} */

addNewAccount = () =>{
    let navigate = useNavigate();
    this.props.addNewAccountToState(this.state.newAccount);
   // console.log(this.props);
   navigate('/');
    
}

    render(){

        
        return(
            <div className="container">
                 <div className="col-10 offset-1">
                    <h3 className="display-4 m-4">
                        Accounts              
                    </h3>
                    <div className="col-10 offset-1">
                        <input type="text" onChange={this.changeHandler} id="id" placeholder="id" className="form-control"/><br/>
                        <input type="text" onChange={this.changeHandler} id="name" placeholder="name" className="form-control"/><br/>
                        <input type="text" onChange={this.changeHandler} id="lastname" placeholder="lastname" className="form-control"/><br/>
                        <input type="text" onChange={this.changeHandler} id="phone" placeholder="phone" className="form-control"/><br/>
                        <input type="email" onChange={this.changeHandler} id="email" placeholder="email" className="form-control"/><br/>
                    <button onClick={this.addNewAccount} className="btn btn-primary form-control">Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddAccount; //da imammo history