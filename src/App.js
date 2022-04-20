import React, { Component } from "react";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";

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
            </Routes>
            </BrowserRouter>
            
        )
    }
}

export default App;