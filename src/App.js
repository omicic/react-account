import React, { useState } from "react";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";
import EditAccount from "./components/EditAccount/EditAccount";

function App () {
 /*    state = {
        accounts : [
            {id:1,name:"Olivera",lastname:"Micic", phone:"11-111-111",email:"a@gmail.com"}
        ]
    } */

    const [accounts,setAccounts] = useState([
        {id:1,name:"Olivera",lastname:"Micic", phone:"11-111-111",email:"oki@gmail.com"},
        {id:2,name:"Aki",lastname:"Micic", phone:"11-111-111",email:"a@gmail.com"}
    ])

    const addNewAccountToState = (acc) =>{

         setAccounts([...accounts,acc]);

    }

   const deleteAccount = (id) =>{
      
        const newCopyAccounts = accounts.filter(account=>{
             return   account.id !== id;
        });
        setAccounts(newCopyAccounts);
        //svi osim onoga koga bri[emo]
        //this.setState({accounts:newCopyAccounts});
    }

/*    const editedAccount = (acc) =>{
            let accountPosition = accounts.map(account=>account.id).indexOf(acc.id);
            accounts[accountPosition] = acc;
            setAccounts({accounts})
    } */



        return(
            <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={(
                    <AccountsTable accounts = {accounts}/>
                )}/>
                <Route path="/add" element={(
                    <AddAccount addNewAccountToState={addNewAccountToState}/>
                )}/>

                <Route path="/edit" element={(
                    <EditTable accounts={accounts} deleteAccount={deleteAccount}/>
                )}/>
                <Route path="/edit/:id"
                    element={( <EditAccount accounts={accounts}/> )}
               />
                    
                    
                   
              



            </Routes>
            </BrowserRouter>
            
        )
    
}

export default App;