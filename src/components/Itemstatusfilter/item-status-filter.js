import { React, Component } from 'react'

import './item-status-filter.css'

class ItemStatusFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ]

  render() {
    const buttonAll = this.buttons.map(({ label, name }) => {
      const { filter, onFilterChange } = this.props
      const isActive = filter === name
      const clazz = isActive ? 'btn btn-info' : 'btn btn-outline-secondary'
      return (
        <button type="button" key={name} className={clazz} onClick={() => onFilterChange(name)}>
          {label}
        </button>
      )
    })

    return <div className="btn-group">{buttonAll}</div>
  }
}

export default ItemStatusFilter
