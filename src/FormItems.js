import React, {PureComponent} from 'react'
import {Radio, RadioGroup} from 'react-form'

export class NumInput extends PureComponent {
  render() {
    return (
      <div>
        <label>
          {this.props.title}
          <input type="number" name={this.props.name}/>
        </label>
      </div>
    )
  }
}

export class TextInput extends PureComponent {
  render() {
    return (
      <div>
        <label>
          {this.props.title}
          <input type="text" name={this.props.name}/>
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
          {this.props.title}
          <select name={this.props.name} value={this.state.value} onChange={this.handleChange}>
            {this.props.options.map(option => <option value={option}>{option}</option>)}
          </select>
        </label>
      </div>
    )
  }
}

export class RadioInput extends PureComponent {
  render() {
    return (
      <RadioGroup field={this.props.name}>
        {this.props.title}
        {this.props.values && this.props.values.map(v =>
        <div key={`${this.props.name}-${v}`}>
          <Radio id={`${this.props.name}-${v}`} value={v}/>
          <label htmlFor={`${this.props.name}-${v}`}>{v}</label>
        </div>)}
      </RadioGroup>
    )
  }
}
