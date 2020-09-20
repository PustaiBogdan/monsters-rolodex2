import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {SerchBox} from './components/serch-box/serch-box.component'
import {CardList} from './components/card-list/card-list.component';

class App extends Component{
  constructor(){
    super();
      this.state={
       monsters:[],
       serchField:''
       
      };
      
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>{this.setState({monsters:users})
  });
  }
  handelChange=(e)=>{
    this.setState(                                                                
      {
        serchField:e.target.value
      }
    )}
  
  render(){
    
    const {monsters,serchField}=this.state;
    const filterdMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(serchField.toLocaleLowerCase()))
    return(
        <div className="App">
          <SerchBox 
            placeholder='serch monster'
            handelChange={this.handelChange}
          />
          <CardList monsters={filterdMonsters}/>

        </div> 
    );
  }
}

export default App;
