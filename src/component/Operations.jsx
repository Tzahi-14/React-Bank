import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button'

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: "", vendor: "", category: ""
        }
    }

    deposit = () => {
        const obj = {
            amount: parseInt(this.state.amount),
            vendor: this.state.vendor,
            category: this.state.category
        }
        this.props.getInputs(obj)
    }

    withdraw = () => {
        if (this.props.balance - this.state.amount > 0) {
            let obj = {
                amount: parseInt(-this.state.amount),
                vendor: this.state.vendor,
                category: this.state.category
            }
            this.props.getInputs(obj)
        }
        else{
            alert ("You can't stay with negative balance")
        }
    }
    inputHandler = (e) => {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="oprations-inputs">
                <div>Add Vendor : <Input type="text" id="vendor-input" placeholder="Vendor" name="vendor" onChange={this.inputHandler} style={{ margin: "1rem" }} /></div>
                <div>Add Category : <Input type="text" id="category-input" placeholder="Category" name="category" style={{ margin: "1rem" }} onChange={this.inputHandler} /></div>
                <div>Add Amount : <Input type="number" id="amount-input" placeholder="Enter Your amount" name="amount" style={{ margin: "1rem" }} onChange={this.inputHandler} /></div>
                <Link to="/transcations"><Button onClick={this.deposit} style={{ margin: "1rem" }} variant="contained" color="primary" >Deposit</Button></Link>
                <Link to="/transcations"><Button onClick={this.withdraw} style={{ margin: "1rem" }} variant="contained" color="secondary" >Withdraw</Button></Link>
            </div> 
        )
    }




}

export default Operations