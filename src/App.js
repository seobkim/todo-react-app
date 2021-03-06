import logo from './logo.svg';
import Todo from './Todo';
import './App.css';
import React from 'react';
import AddTodo from "./AddTodo"
import {Paper,List,Container} from "@material-ui/core"; 

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      //items 배열로
      items:[
        {id :0, title:"hello world 1",done:true},
        {id :1, title:"hello world 2",done:false},
      ],
    };
  }


add = (item) =>{
  const thisItems = this.state.items;

  item.id = "ID-" +thisItems.length;
  item.done = false;

  thisItems.push(item);

  this.setState({items:thisItems});

  console.log("items :", this.state.items)
}

delete = item =>{
  const thisItems = this.state.items;
  console.log("Before Update Items : ", this.state.items);
  
  const newItems = thisItems.filter(e => e.id !== item.id);

  this.setState({ items: newItems}, () =>{
    console.log("Updated Items : ",this.state.items);
  })
}

render(){
  let todoItems = this.state.items.length > 0 && (
    <Paper style = {{margin : 16}}>
      <List>
        {this.state.items.map((item,idx)=>(
          <Todo item={item} key={item.id} delete={this.delete}/>
        ))}
      </List>
    </Paper>
  )

  return (
  <div className='App'>
      <Container maxWidth="md">
        <AddTodo add={this.add}/>
        <div className='TodoList'>{todoItems}</div>
      </Container>
  </div>
  )
  }
}
export default App;
