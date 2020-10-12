import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Categories extends Component {

        filterByCategory () {
        let dataByCategoryObj = {}
        this.props.data.map((transaction) =>{
            if(dataByCategoryObj[transaction.category]){
                dataByCategoryObj[transaction.category]["amount"] += transaction.amount
            }
            else{
                dataByCategoryObj[transaction.category] = {category: transaction.category ,amount: transaction.amount} 
            }
            
            
        })
        
        let dataByCategoryArr = Object.values(dataByCategoryObj)
        console.log(dataByCategoryArr)
        return dataByCategoryArr
    }


    render() {
        let invokeFunc = this.filterByCategory()
        return (
            <div>
                {invokeFunc.map(transaction=>{
                    return <div key={transaction.category}> {transaction.category} {transaction.amount}</div>
                })}
            </div>
        )
    }




}

export default Categories  