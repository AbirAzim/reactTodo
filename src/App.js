import React, { Component } from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import About from './components/pages/About'
import 'bootstrap/dist/css/bootstrap.css';
import Todos from './components/Todos';
import Header from './components/headers/Header';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

class App extends Component {
  state = { 
    todos : []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        let datas = [...res.data];
        const todos = datas.filter(data => data.id <= 1);
        this.setState({todos : todos});
      })
      .catch(err => console.log(err));
  }

  addTodo = (title) => {
    const newTodo = {id : uuidv4() , title , completed : false};
    this.setState({todos : [...this.state.todos , newTodo]});
    // axios.post('https://jsonplaceholder.typicode.com/todos', {
    //   title,
    //   completed: false
    // })
    // .then(res => {
    //   console.log(res.data);
    //   //this.setState({todos: [...this.state.todos , res.data]})
    // })
    // .catch(err => console.log(err));

  }

  deleteItem = (id)=>{
    const todos = this.state.todos.filter(todo => {if(todo.id !== id){ return todo }})
    this.setState({todos : todos})
  }

  markComplete =(id) => {
    const todos = this.state.todos.map(todo => {if(todo.id === id){ todo.completed = !todo.completed} return todo})
    this.setState({todos : todos})
  }

  render() { 
    return ( 
      <Router>
        <div className='container'>
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem}/> 
            </React.Fragment>
          )} />
          <Route path='/about' component={About}/>
      </div>
    </Router> );
  }
}

export default App;