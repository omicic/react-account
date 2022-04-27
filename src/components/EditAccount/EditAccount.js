import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Account from "../Account/Account";

const EditAccount = ({accounts}) => {

    const {id} = useParams()
    console.log(id);

    let  account = {
            id:"",name:"",lastname:"",phone:"",email:""
        }
    let navigate = useNavigate();

/*     componentDidMount(){
    //console.log(this.props.match.params.id)
    const accountForEdit = this.props.accounts.filter(acc => acc.id == this.props.match.params.id)[0];     
    this.setState({account :accountForEdit});
    } */
//console.log(accounts)
   let accountEdit =  accounts.filter(acc => acc.id == id)[0];
//console.log(accountEdit)
  
    

function handleClick(e) {
    let index;
  for (let i = 0; i < accounts.length; i++) {
      if(accounts[i].id==accountEdit.id){
         index = i;
      }
    
  }

    accounts.splice(index, 1);
    accounts.push(accountEdit);
    navigate('/') 
}

const changeHandler = (event) =>{
    let id = event.target.id;
    let newAccountCopy = {...accountEdit};
    newAccountCopy[id]=event.target.value;
    accountEdit = newAccountCopy
   

} 
        return (
            <div className="container">
            <div className="col-10 offset-1">
               <h3 className="display-4 m-4">
                   Edit Account             
               </h3>
               <div className="row">
               <div className="col-10 offset-1">
                   <input type="text" defaultValue={accountEdit.id} id="id" className="form-control"/><br/>
                   <input type="text" onChange={changeHandler} defaultValue={accountEdit.name} id="name" className="form-control"/><br/>
                   <input type="text" onChange={changeHandler} defaultValue={accountEdit.lastname} id="lastname"  className="form-control"/><br/>
                   <input type="text" onChange={changeHandler} defaultValue={accountEdit.phone} id="phone" className="form-control"/><br/>
                   <input type="email" onChange={changeHandler} defaultValue={accountEdit.email} id="email"  className="form-control"/><br/>
               <button onClick={handleClick}  className="btn btn-primary form-control">Save</button>
               </div>
               </div>
           </div>
       </div>
        )
}

export default EditAccount;