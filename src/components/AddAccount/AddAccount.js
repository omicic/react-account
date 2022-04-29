import React, { useState, useEffect, useRef } from "react";
import { useNavigate} from "react-router-dom";

/* const AddAccount = ({accounts}) =>{

    let navigate = useNavigate();
    //const [inputValue, setInputValue] = useState('')

   let  newAccount = {
        id:"",name :"",lastname:"",phone:"",email:""
}
 const changeHandler = (event) =>{
        console.log(event.target.value)
        let id = event.target.id;

        //console.log(id)//koje polje
        let newAccountCopy = {...newAccount};

        newAccountCopy[id]=event.target.value;
        newAccount = newAccountCopy

    } 

    function handleClick(e) {
        accounts.push(newAccount);
        navigate('/')
    }
        
        return(
            <div className="container">
                 <div className="col-10 offset-1">
                    <h3 className="display-4 m-4">
                        Accounts              
                    </h3>
                    <div className="col-10 offset-1">
                        <input type="text" onChange={changeHandler} id="id" placeholder="id" className="form-control"/><br/>
                        <input type="text" onChange={changeHandler} id="name" placeholder="name" className="form-control"/><br/>
                        <input type="text" onChange={changeHandler} id="lastname" placeholder="lastname" className="form-control"/><br/>
                        <input type="text" onChange={changeHandler} id="phone" placeholder="phone" className="form-control"/><br/>
                        <input type="email" onChange={changeHandler} id="email" placeholder="email" className="form-control"/><br/>
                    <button onClick={handleClick} className="btn btn-primary form-control">Save</button>
                    </div>
                </div>
            </div>
        )
} */

function AddAccount (props){

    let navigate = useNavigate();
    const idInput = useRef();

    useEffect(()=>{
        idInput.current.focus();
    })

   const [newAccount,setNewAccount] = useState({
        id:"",name :"",lastname:"",phone:"",email:""
    },[]);



    const handleClick = () => {
        props.addNewAccountToState(newAccount)
        navigate('/')
    } 
        
        return(
            <div className="container">
                 <div className="col-10 offset-1">
                    <h3 className="display-4 m-4">
                        Accounts              
                    </h3>
                    <div className="col-10 offset-1">
                        <input type="text" ref={idInput} onChange={e=>{setNewAccount({...newAccount,id:e.target.value})}}  placeholder="id" className="form-control"/><br/>
                        <input type="text" onChange={e=>{setNewAccount({...newAccount,name:e.target.value})}}  placeholder="name" className="form-control"/><br/>
                        <input type="text" onChange={e=>{setNewAccount({...newAccount,lastname:e.target.value})}}  placeholder="lastname" className="form-control"/><br/>
                        <input type="text" onChange={e=>{setNewAccount({...newAccount,phone:e.target.value})}}  placeholder="phone" className="form-control"/><br/>
                        <input type="email" onChange={e=>{setNewAccount({...newAccount,email:e.target.value})}}  placeholder="email" className="form-control"/><br/>
                    <button onClick={handleClick} className="btn btn-primary form-control">Save</button>
                    </div>
                </div>
            </div>
        )
}

export default AddAccount; 