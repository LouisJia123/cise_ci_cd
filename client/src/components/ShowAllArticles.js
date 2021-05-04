import React, {Component} from 'react';
import Table from './Table.js';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';  

export default class ShowAllArticles extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tableData:[
        {}
      ],
    }
}

componentDidMount() {
  axios
    .get('http://localhost:8082/api/articles')
    .then(res => {
      this.setState({
          tableData: res.data
      })
    })
    .catch(err =>{
      console.log('Error from ShowAllArticles');
    })
};

  render() {
    return (
      <div className="App">
        SEEDS Database
        <br/> Articles Table
        <Table data={this.state.tableData}/>
      </div>
      
    );

}
}

Link.render(
    <ShowAllArticles />, 
    document.getElementById("app")
  );