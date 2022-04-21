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
   const accountEdit =  accounts.filter(acc => acc.id == id)[0];
//console.log(accountEdit)
  
    

function handleClick(e) {
    //accounts.push(newAccount);
    var index = accounts.indexOf(e.target.id)
    if (index !== -1) {
        accounts.splice(index, 1);
        //this.setState({people: array});
      }
    accounts.push(accountEdit);
    navigate('/')
}

const changeHandler = (event) =>{
    console.log(event.target.value)
    let id = event.target.id;

 

    //console.log(id)//koje polje

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