import React, { Component } from 'react';
import Item from './Item';
import './App.css';

class App extends Component {
  state = { todos: [] };

  componentDidMount() {
    const storedTodos = window.localStorage.getItem('todos');
    this.setState({ todos: storedTodos ? storedTodos.split(',') : [] });
  }

  add = event => {
    const { todos, input } = this.state;
    event.preventDefault();
    const newTodos = [...todos, input];
    this.setState({ todos: newTodos, input: '' });
    window.localStorage.setItem('todos', newTodos);
  };

  delete = todo => {
    const { todos } = this.state;
    todos.splice(todos.indexOf(todo), 1);
    this.setState({ todos });
    window.localStorage.setItem('todos', todos);
  };

  edit = (todo, newValue) => {
    const { todos } = this.state;
    todos[todos.indexOf(todo)] = newValue;
    this.setState({ todos });
    window.localStorage.setItem('todos', todos);
  };

  render() {
    const { input, todos } = this.state;
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 data-cy='header' className='App-logo'>
            ✨TODO✨
            <br />
            ✨APP✨
          </h1>
          <form data-cy='add-form' className='App-add' onSubmit={this.add}>
            <input
              value={input}
              onChange={e => this.setState({ input: e.target.value })}
            />
            <button className='save'>Add</button>
          </form>
          <ul>
            {todos.map((todo, i) => (
              <Item key={i} todo={todo} edit={this.edit} remove={this.delete} />
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
