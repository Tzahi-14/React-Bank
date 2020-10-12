import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Transcations from './component/Transcations';
import Operations from './component/Operations';
import axios from 'axios';
import Categories from './component/Categories';
import Snackbar from "@material-ui/core/Snackbar"
import Button from '@material-ui/core/Button'




export class App extends Component {
  constructor() {
    super()
    this.state = {
      snackBarOpen: false,
      snackBarMsg: "",
      data:[],
      balance: 0,
    }
  }

  async getTransactions() {
    return await axios.get("http://localhost:4000/transactions")
  }

  async postTransactions(obj) {
    return await axios.post("http://localhost:4000/transaction",obj)
  }

  async componentDidMount() {
    const response = await this.getTransactions()
    this.setState({ data: response.data })
  }

  reducer = (accumulator, currentValue) => accumulator + currentValue ;

   deleteT = async (id) =>{
   const deleteTransaction = await axios.delete(`http://localhost:4000/transaction/${id}`)
   console.log(deleteTransaction.data._id)
    let currentData = [...this.state.data]
    const index = currentData.findIndex(a=>a._id===id)
    console.log(index)
    currentData.splice(index,1)
    this.setState({
      data:currentData,
      snackBarOpen:true,
      snackBarMsg:"Transaction removed successfully"
    })
  }

  getInputs = async (obj) => {
    const data = await this.postTransactions(obj)
    console.log(data.data)
    let currentData = [...this.state.data]
    currentData.push(data.data)
    this.setState({
      data: currentData,
      snackBarOpen:true,
      snackBarMsg: "Transaction added successfully"
    })
  }

  snackBarClose = (e) => {
    this.setState({ snackBarOpen: false })
  }


  render() {
    const balance = this.state.data.map(a => a.amount).reduce(this.reducer,0)
    return (
      <Router>
      <div>
        <Snackbar
            open={this.state.snackBarOpen}
            autoHideDuration={4000}
            onClose={this.snackBarClose}
            message={<span id="snackbar-msg">{this.state.snackBarMsg}</span>}
            action={
              <Button onClick={this.snackBarClose} style={{backgroundColor: "yellow"}}> X </Button>
            }
          />
    <div id="home"> Hellow Tzahi, your Balance is: {balance>500? <span style={{color:"green"}}>{balance}</span>:<span style={{color:"red"}}>{balance}</span>} </div>
      <Link to="/operations" id="operations-click"> Add transcation </Link>
      <Link to="/transcations" id="transcations-click"> Check all transcations </Link>
      <Link to="/categories" id="categories-click">  Transcations by categories </Link>

        <Route exact path="/transcations"  render ={() => <Transcations data={this.state.data} deleteT={this.deleteT} />} />
        <Route exact path="/operations"  render ={() =><Operations print={this.print} getInputs={this.getInputs} data={this.state.data} />} />
        <Route exact path="/categories"  render ={() =><Categories data={this.state.data}/>} />

      </div>
      </Router>
    )
  }


}

export default App;