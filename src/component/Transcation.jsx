import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';

class Transcation  extends Component {
    
    delete = () =>{
        this.props.deleteT(this.props.transaction._id)
    }

    render() {
        const transcation = this.props.transaction
        return (
            <div id="all-transactions">
                     <span  className="transaction"> Amount {transcation.amount>0? <span style={{color:"green"}}>{transcation.amount}</span>: <span style={{color:"red"}}>{transcation.amount}</span> }</span>
                    <span> Vendor: {transcation.vendor}</span>
                    <span> Category {transcation.category}</span> 
                    <Button
                     id="delete-btn" onClick={this.delete} style={{margin:"1rem"}}
                      variant="contained" color="primary" startIcon={<DeleteIcon />}>
                      Delete</Button>
            </div>
        )
    }
}

export default Transcation