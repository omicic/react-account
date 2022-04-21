import React, { Component } from "react";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";
import EditAccount from "./components/EditAccount/EditAccount";

class App extends Component{
    state = {
        accounts : [
            {id:1,name:"Olivera",lastname:"Micic", phone:"11-111-111",email:"a@gmail.com"}
        ]
    }

    addNewAccountToState = (acc) =>{
  
    this.setState({
        accounts : [...this.state.accounts,acc]
    })

    }

    deleteAccount = (id) =>{
        const accountsCopy = [...this.state.accounts];
        const newCopyAccounts = accountsCopy.filter(account=>account.id !== id);
        //svi osim onoga koga bri[emo]
        this.setState({accounts:newCopyAccounts});
    }

    editedAccount = (account) =>{

    }


    render(){
        return(
            <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={(
                    <AccountsTable accounts = {this.state.accounts}/>
                )}/>
                <Route path="/add" element={(
                    <AddAccount accounts={this.state.accounts}/>
                )}/>

                <Route path="/edit" element={(
                    <EditTable accounts={this.state.accounts} deleteAccount={this.deleteAccount}/>
                )}/>
                <Route path="/edit/:id"
                    element={( <EditAccount accounts={this.state.accounts}/> )}
               />
                    
                    
                   
              



            </Routes>
            </BrowserRouter>
            
        )
    }
}

export default App;