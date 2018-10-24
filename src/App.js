import React, { Component } from 'react';
import './App.css';

class Item extends Component {
  state = {}
  edit = (event) => {
    event.preventDefault();
    this.props.edit(this.props.todo, this.state.input);
    this.setState({editing: false})
  }
  render() {
    const {todo, remove} = this.props;
    const {input} = this.state;
    if (this.state.editing) {
      return (
        <li>
          <form onSubmit={this.edit}>
            <input
              value={input}
              onChange={e => this.setState({input: e.target.value})}
              style={{ marginRight: '20px' }}
            />
            <button>Save</button>
          </form>
        </li>
      )
    }
    return (
      <li>
        <span style={{ marginRight: '20px' }}>{todo}</span>
        <button className="delete" onClick={() => remove(todo)}>🗑</button>
        <button className="edit" onClick={() => this.setState({editing: true, input: todo})}>✏️</button>
      </li>
    )
  }
}

class App extends Component {
  state = { todos: [] }
  componentDidMount() {
    console.log('mount')
    const storedTodos = window.localStorage.getItem('todos');
    this.setState({ todos: storedTodos ? storedTodos.split(',') : [] })
  }
  addTodo = (event) => {
    const { todos, input } = this.state;
    event.preventDefault();
    const newTodos = [...todos, input]
    this.setState({ todos: newTodos, input: '' });
    window.localStorage.setItem('todos', newTodos);
  }
  delete = (todo) => {
    const { todos } = this.state;
    todos.splice(todos.indexOf(todo), 1);
    this.setState({ todos });
    window.localStorage.setItem('todos', todos);
  }
  edit = (todo, newValue) => {
    const { todos } = this.state;
    todos[todos.indexOf(todo)] = newValue;
    this.setState({ todos });
    window.localStorage.setItem('todos', todos);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-logo">SYSON<br/>CONF<br/>2018</h1>
          <form onSubmit={this.addTodo}>
            <input
              value={this.state.input}
              style={{ marginRight: '20px' }}
              onChange={e => this.setState({ input: e.target.value })}
            />
            <button className="save">Save</button>
          </form>
          <ul>
            {this.state.todos.map((todo, i) => (
              <Item key={i} todo={todo} edit={this.edit} remove={this.delete} />
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
