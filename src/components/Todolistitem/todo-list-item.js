import {React, Component} from 'react';

import './todo-list-item.css';

class TodoListItem extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    const {label, onDeleted, id, onToggleImportant, onToggleDone, done, important, todos} = this.props

    let classNames = 'todo-list-item'
    if(done) {
      classNames += ' done'
    }
    if(important) {
      classNames += ' important'
    }
    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={onToggleDone}>
          <span className='id__number'>{id}. </span>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted} 
                disabled={todos.length === 1 ? true : false}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
};

export default TodoListItem;
