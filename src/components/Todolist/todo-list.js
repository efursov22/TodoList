import React from 'react'

import TodoListItem from '../Todolistitem/todo-list-item'
import './todo-list.css'

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone}) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          todos={todos}
          {...itemProps}
          id={id}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    )
  })

  return <ul className="list-group todo-list">{elements}</ul>
}

export default TodoList
