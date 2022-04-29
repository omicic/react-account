import React, { useState  } from "react";
import { useNavigate, useParams} from "react-router-dom";
import Account from "../Account/Account";

function EditAccount(props) {

    const {id} = useParams()
    let navigate = useNavigate();

    const [accountEdit,setAccount] = useState(props.accounts.filter(acc => acc.id == id)[0])

   //let accountEdit =  accounts.filter(acc => acc.id == id)[0];

function handleClick(e) {
    let index;
    let lenght =props.accounts.length
    for (let i = 0; i < lenght ; i++) {
      if(props.accounts[i].id==accountEdit.id){
         index = i;
      } 
  }

    props.accounts.splice(index, 1);
    props.accounts.push(accountEdit);
    navigate('/') 
}

/* const changeHandler = (event) =>{
    let id = event.target.id;
    let newAccountCopy = {...accountEdit};
    newAccountCopy[id]=event.target.value;
    accountEdit = newAccountCopy
}  */
        return (
            <div className="container">
            <div className="col-10 offset-1">
               <h3 className="display-4 m-4">
                   Edit Account             
               </h3>
               <div className="row">
               <div className="col-10 offset-1">
                   <input type="text" defaultValue={accountEdit.id} id="id" className="form-control"/><br/>
                   <input type="text" onChange={e=>{setAccount({...accountEdit,name:e.target.value})}}  defaultValue={accountEdit.name} className="form-control"/><br/>
                   <input type="text" onChange={e=>{setAccount({...accountEdit,lastname:e.target.value})}} defaultValue={accountEdit.lastname} className="form-control"/><br/>
                   <input type="text" onChange={e=>{setAccount({...accountEdit,phone:e.target.value})}} defaultValue={accountEdit.phone} className="form-control"/><br/>
                   <input type="email"onChange={e=>{setAccount({...accountEdit,email:e.target.value})}} defaultValue={accountEdit.email} className="form-control"/><br/>
               <button onClick={handleClick}  className="btn btn-primary form-control">Save</button>
               </div>
               </div>
           </div>
       </div>
        )
}

export default EditAccount;