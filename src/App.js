import React, { Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/cardlist.component';
import { SearchBox } from './components/searchBox/search-box.component';

class App extends Component{
constructor(){
  super();
  this.state = {
    instrunment:[ ],
    searchField: ''
  };
}
componentDidMount() {
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => this.setState({instrunment: users}))
}
handleChange = e => {
  this.setState({searchField: e.target.value})
}
  render()
  {
    const { instrunment, searchField} = this.state;
    const filteredElement = instrunment.filter(
      music => music.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
      <div className="musical">
           <SearchBox
           placeholder = 'Search Box'
           handleChange = { this.handleChange}
           ></SearchBox>
        <CardList instrunment ={filteredElement}>
          </CardList>
      </div>
     
    );
  }
}

export default App;
