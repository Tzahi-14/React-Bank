import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: "", vendor: "", category: ""
        }
    }

    deposit  = () => {
        let obj = {
            amount: parseInt(this.state.amount),
            vendor: this.state.vendor,
            category: this.state.category
        }
        this.props.getInputs(obj)
    }

    withdraw  = () => {
        let obj = {
            amount: parseInt(-this.state.amount),
            vendor: this.state.vendor,
            category: this.state.category
        }
        this.props.getInputs(obj)
    }

    inputHandler = (e) => {
        const { value, name } = e.target
        // console.log(name)
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <input type="number" id="amount-input" placeholder="Enter Your amount" name="amount" onChange={this.inputHandler} />
                <input type="text" id="vendor-input" placeholder="Vendor" name="vendor" onChange={this.inputHandler} />
                <input type="text" id="category-input" placeholder="Category" name="category" onChange={this.inputHandler} />
                <Link to="/transcations"><button onClick={this.deposit}>Deposit</button></Link>
                <Link to="/transcations"><button onClick={this.withdraw}>Withdraw</button></Link>
            </div>
        )
    }




}

export default Operations