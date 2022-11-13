import React, { Component } from 'react'

import './search-panel.css'

class SearchPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
  }

  search = (e) => {
    const term = e.target.value
    this.setState({term})
    this.props.onSearchChanche(term)

  }
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.search}
        value={this.state.term}
      />
    )
  }
}

export default SearchPanel
