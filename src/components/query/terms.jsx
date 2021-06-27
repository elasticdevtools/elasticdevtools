import React, { Component } from 'react'
import { add, del, mod } from '../../reduxTools/actions'
import { connect } from 'react-redux'

class Terms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      field: '',
      value: '',
      allValues: [],
      heirarchy: this.props.heirarchy,
    }
  }

  componentWillUnmount() {
    let newTerms = {
      terms: {
        [this.state.field]: {
          value: [],
        },
      },
    }
    this.state.allValues.forEach((a) => {
      newTerms.terms[this.state.field].value.push(a.value)
    })
    this.props.DELETE(this.props.heirarchy, newTerms)
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (this.state.allValues.length !== prevState.allValues.length) {
      let newTerms = {
        terms: {
          [this.state.field]: {
            value: [],
          },
        },
      }
      this.state.allValues.forEach((a) => {
        newTerms.terms[this.state.field].value.push(a.value)
      })
      this.props.DELETE(this.props.heirarchy, newTerms)
    }
  }

  onFieldChange = (e) => {
    this.setState({
      field: e.target.value,
    })
    this.props.ADD(this.props.heirarchy, {
      terms: {
        [e.target.value]: {
          value: '',
        },
      },
    })
  }

  updateAllValues = () => {
    let temp = this.state.allValues
    let newID
    try {
      newID = temp[temp.length - 1]['id'] + 1
    } catch {
      newID = 0
    }

    let newValue = {
      id: newID,
      value: this.state.value,
    }
    this.setState({
      allValues: [...temp, newValue],
      value: '',
    })
  }

  deleteItem = (id) => {
    this.setState({
      allValues: this.state.allValues.filter((a) => a['id'] !== id),
    })
  }

  render() {
    return (
      <div className='card'>
        {this.props.onDelete !== undefined ||
        this.props.heirarchy[this.props.heirarchy - 1] === 'Query' ? (
          <div className='card-header d-flex justify-content-between  align-items-center'>
            Terms
            <button
              onClick={(a) => this.props.onDelete(this.props.element)}
              type='button'
              className='btn btn-sm btn-danger'
            >
              Delete
            </button>
          </div>
        ) : (
          <div className='card-header'>Terms</div>
        )}
        <div className='card-body'>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='field'
              placeholder='Field Name'
              value={this.state.field}
              onChange={this.onFieldChange}
            />
            <label htmlFor='field '>Field Name</label>
          </div>
          {this.state.allValues.length !== 0 ? (
            <table class='table'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Value</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.allValues.map((oneValue) => {
                  return (
                    <tr>
                      <th scope='row'>{oneValue.id}</th>
                      <td>{oneValue.value}</td>

                      <td>
                        <button
                          type='button'
                          onClick={() => this.deleteItem(oneValue.id)}
                          class='btn btn-sm btn-danger'
                        >
                          remove
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          ) : (
            <React.Fragment />
          )}
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='value'
              placeholder='Value'
              value={this.state.value}
              onChange={(e) =>
                this.setState({
                  value: e.target.value,
                })
              }
            />
            <label htmlFor='value'>Value</label>
          </div>
          <button
            type='button'
            className='btn btn-sm btn-success'
            onClick={this.updateAllValues}
          >
            Add New Value
          </button>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = (props) => {
  return {
    queryReducer: props.queryReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ADD: (h, obj) => dispatch(add(h, obj)),
    DELETE: (h, obj) => dispatch(del(h, obj)),
    MODIFY: (h, obj) => dispatch(mod(h, obj)),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Terms)
