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
        return dataByCategoryArr
    }
    render() {
        let invokeFunc = this.filterByCategory()
        return (
            <div id="categories">
                {invokeFunc.map(transaction=>{
                    return <div className="categorie" key={transaction.category}> <h1>Categorie: {transaction.category}, Total amount: {transaction.amount}</h1></div>
                })}
            </div>
        )
    }
}
export default Categories  