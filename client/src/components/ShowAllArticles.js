import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class ShowAllArticles extends Component {
  constructor(props){
    super(props);
    this.state = {
        article: {}
    }
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
}

componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/articles/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showAllArticles-API-response: " + res.data);
        this.setState({
            article: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowAllArticles");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/articles/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowBookDetails_deleteClick");
      })
  };

getKeys = function(){
    console.log(this.props.data);
    return Object.keys(this.props.data[0]);
}

getHeader = function(){
    var keys = this.getKeys();
    return keys.map((key, index)=>{
    return <th key={key}>{key.toUpperCase()}</th>
    })
}

getRowsData = function(){
    var items = this.props.data;
    var keys = this.getKeys();
    return items.map((row, index)=>{
    return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
    })
}

render() {
return (
<div>
<table>
<thead>
<tr>{this.getHeader()}</tr>
</thead>
<tbody>
{this.getRowsData()}
</tbody>
</table>
</div>

);
}
}
const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
        return <td key={props.data[key]}>{props.data[key]}</td>
        })
}

Link.render(
    <ShowAllArticles />, 
    document.getElementById("app")
  );

export default ShowAllArticles;