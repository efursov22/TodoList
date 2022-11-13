import { Component } from 'react'
import './itemaddform.css'

class AddItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      label: '',
    }
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.label.length < 3) return
    this.props.addItem(this.state.label)
    this.setState(({
        label: ''
    }))
  }

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control"
            onChange={this.onLabelChange}
            placeholder="What needs to be done"
            value={this.state.label}
          />
          <button className="add__btn">Add item</button>
        </form>
      </>
    )
  }
}

export default AddItem
