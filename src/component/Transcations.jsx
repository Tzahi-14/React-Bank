import React, { Component } from 'react';
import Transcation from './Transcation';
import "../style/style.css" 
// import { Link } from 'react-router-dom';

class Transcations extends Component {

    render() {
        return (
            <div>
                {this.props.data.map((transaction,index)=>{
                    return <Transcation transaction={transaction} index={index} deleteT={this.props.deleteT} key={index} />
                })}
            </div>
        )
    }




}

export default Transcations  