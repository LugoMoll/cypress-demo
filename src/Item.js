import React, { Component } from 'react';

class Item extends Component {
  state = {}
  edit = (event) => {
    event.preventDefault();
    const {todo, edit} = this.props;
    const {input} = this.state;

    edit(todo,input);
    this.setState({editing: false})
  }
  render() {
    const {todo, remove} = this.props;
    const {input, editing} = this.state;

    if (editing) {
      return (
        <li>
          <form data-cy="edit-form" onSubmit={this.edit}>
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
      <li data-cy="item">
        <span>{todo}</span>
        <button data-cy="edit" className="edit" onClick={() => this.setState({editing: true, input: todo})}>✏️</button>
        <button data-cy="delete" className="delete" onClick={() => remove(todo)}>🗑</button>
      </li>
    )
  }
}

export default Item;