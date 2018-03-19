import React, {PureComponent} from 'react'

export class NumInput extends PureComponent {
  render() {
    return (
      <div>
        <label>
          {this.props.name}
          <input type="number" name={this.props.name}/>
        </label>
      </div>
    )
  }
}

export class Select extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div>
        <label>
          {this.props.name}
          <select name={this.props.name} value={this.state.value} onChange={this.handleChange}>
            {this.props.options.map(option => <option value={option}>{option}</option>)}
          </select>
        </label>
      </div>
    )
  }
}
