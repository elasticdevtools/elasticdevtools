import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import GetElementByName from '../../utils/getelementbyname'

class Base extends Component {
  state = {
    // options: ["Query", "Sort", "Aggs", "Source", "Size"],
    options: ['Source', 'Query', 'Sort', 'Size'],
    currentComponents: [],
    fieldValue: 'Select Element...',
    heirarchy: ['Base'],
  }

  handleDelete = (elem) => {
    console.log('delete', elem.target)
    this.setState({
      currentComponents: this.state.currentComponents.filter(
        // (a) => JSON.stringify(a) !== JSON.stringify(elem)
        (a) => a.key !== elem.key
      ),
      options: [...this.state.options, elem.value],
    })
  }

  updateCurrentComponents = () => {
    // console.log(this.state.currentComponents);
    let temp = this.state.currentComponents
    let newKey
    try {
      newKey = temp[temp.length - 1].key + 1
    } catch {
      newKey = 0
    }
    let newElement = {
      key: newKey,
      value: this.state.fieldValue,
    }
    console.log(newElement)
    this.setState({
      currentComponents: [...temp, newElement],
      options: this.state.options.filter((a) => a !== this.state.fieldValue),
      fieldValue: 'Select Element...',
    })
  }

  render() {
    return (
      <div className='col-sm m-4'>
        <h1>Builder</h1>
        <div className='input-group'>
          <select
            className='form-select'
            id='inputGroupSelect01'
            onChange={(a) => this.setState({ fieldValue: a.target.value })}
            aria-label='base builder'
            value={this.state.fieldValue}
          >
            <option>Select Element...</option>
            {this.state.options.map((a) => (
              <option value={a}>{a}</option>
            ))}
          </select>
          <button
            onClick={this.updateCurrentComponents}
            className='btn btn-primary ml-2'
            type='button'
          >
            ADD
          </button>
        </div>

        <div className='card'>
          {this.state.currentComponents.map((a) => (
            <GetElementByName
              key={a.key}
              heirarchy={this.state.heirarchy}
              onDelete={this.handleDelete}
              element={a}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Base
