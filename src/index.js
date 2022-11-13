import { React, Component } from 'react'
import ReactDOM from 'react-dom'

import AppHeader from './components/Appheader/app-header'
import SearchPanel from './components/Searchpanel/search-panel'
import TodoList from './components/Todolist/todo-list'
import ItemStatusFilter from './components/Itemstatusfilter/item-status-filter'
import AddItem from './components/ItemAddForm/ItemAddForm'

import './index.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoData: [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Make Awesome App'),
        this.createTodoItem('Have a lunch'),
      ],
      term: '',
      filter: 'all'
    }
  }
  id = 1

  createTodoItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      id: this.id++,
    }
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      this.id--
      return {
        todoData: newArr,
      }
    })
  }
  addItem = (text) => {
    const newItem = this.createTodoItem(text)
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem]
      return {
        todoData: newArr,
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const oldItem = todoData[idx]
      const newItem = {...oldItem, important: !oldItem.important}

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newArray
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const oldItem = todoData[idx]
      const newItem = {...oldItem, done: !oldItem.done}

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newArray
      }
    })
  }

  onSearch = (items, term) => {
    if(term.length === '') {
      return items
    }
    return items.filter((el) => el.label.toLowerCase().includes(term.toLowerCase())) 
  }
  onSearchChanche = (term) => {
    this.setState({term})
  }

  filter = (items, filter) => {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((el) => !el.done);
      case 'done': 
        return items.filter((el) => el.done)
      default:
       return items;
    }
  }

  onFilterChange = (filter) => {
    this.setState({filter})
  }
  render() {
    const { todoData, term, filter } = this.state
    const visibleItems = this.filter(this.onSearch(todoData, term), filter)
    
    const done = todoData.filter((el) => el.done).length
    const toDo = todoData.filter((el) => !el.done).length
    
    return (
      <div className="todo-app">
        <AppHeader toDo={toDo} done={done} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChanche={this.onSearchChanche}/>
          <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={(id) => this.onToggleImportant(id)}
          onToggleDone={(id) => this.onToggleDone(id)}
        />
        <AddItem addItem={this.addItem}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
