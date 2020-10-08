import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Transcation  extends Component {

    delete = () =>{
        this.props.deleteT(this.props.transaction._id)
    }

    render() {
        const transcation = this.props.transaction
        return (
            <div>
                    <span > Amount {transcation.amount>0? <span style={{color:"green"}}>{transcation.amount}</span>: <span style={{color:"red"}}>{transcation.amount}</span> }</span>
                    <span> Vendor: {transcation.vendor}</span>
                    <span> Category {transcation.category}</span>
                    <span> <button onClick={this.delete}>Delete</button></span>
            </div>
        )
    }




}

export default Transcation