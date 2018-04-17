import React, { PureComponent, Component } from 'react';
import {Form, Text, RadioGroup, Radio, Field, NestedField} from 'react-form'
import logo from './logo.svg';
import './App.css';
import {NumInput, RadioInput, TextInput} from './FormItems'
import {data} from './form.json'

function createArray(size) {
  const result = []
  for (let i = 0 ; i < size ; i ++) {
    result.push(i)
  }
  return result
}

class ArrayInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: []
    }
  }
  render() {
    const {size} = this.props
    const arr = createArray(size)
    return (
    <Field field={this.props.field}>
    {fieldApi => {
      const {onChange, field, ...rest} = this.props
      const {value, setValue} = fieldApi
      return (
        <div>
          {arr.map((item, idx) => {
            return <input
                key={idx}
                value={this.state.values[idx] || ''}
                type="number"
                onChange={e => {
                  this.state.values[idx] = e.target.value
                  setValue(this.state.values)
                  if (onChange) {
                    onChange(e.target.value, e)
                  }
                }}
            />})}
        </div>
      )
    }}
    </Field>)
  }
}

class App extends PureComponent {
  handleSubmit(values) {
    console.log(values)
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit} render={({submitForm}) => (
        <form onSubmit={submitForm}>
          <div className="formContainer">
            {data.map(group => {
              return <div style={{flex: 1}} key={group.group_name}>
                <div className="groupName">{group.group_name}</div>
                {group.inputs.map((item) => {
                  return <div key={item.name}>
                    {item.sub_group && <div>{item.sub_group}</div>}
                    {item.type === 'radio' && <RadioGroup field={item.name}>
                      {item.title}
                      {item.values && item.values.map(v =>
                      <div key={`${item.name}-${v}`}>
                        <Radio id={`${item.name}-${v}`} value={v}/>
                        <label htmlFor={`${item.name}-${v}`}>{v}</label>
                      </div>)}
                    </RadioGroup>}
                    {item.type === 'text' || item.type === 'number' && <div>
                      {item.title}
                      <Text field={item.name} placeholder={item.title} type={item.type}/>
                    </div>}
                    {item.type === 'array' && <ArrayInput field={item.name} size={item.size.reduce((partial, value) => partial + value)}/>}
                  </div>
                })}
              </div>
            })}
          </div>
          <button type="submit">Submit</button>
        </form>)}/>
    );
  }
}

export default App;
