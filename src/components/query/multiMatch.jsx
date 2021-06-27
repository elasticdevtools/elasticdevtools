import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'

import { add, del, mod } from '../../reduxTools/actions'

class MultiMatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      queryValue: '',
      types: [
        'bool_prefix',
        'phrase_prefix',
        'phrase',
        'cross_fields',
        'most_fields',
        'best_fields',
      ],
      typeValue: '',
      field: '',
      queryFields: [],
    }
  }

  componentWillUnmount() {
    let newMultiMatch = {
      multi_match: {
        query: this.state.queryValue,
        type: this.state.typeValue,
        fields: [],
      },
    }

    this.state.queryFields.forEach((a) => {
      newMultiMatch.multi_match.fields.push(a.field)
    })

    this.props.DELETE(this.props.heirarchy, newMultiMatch)
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (this.state.queryFields.length !== prevState.queryFields.length) {
      let newMultiMatch = {
        multi_match: {
          query: this.state.queryValue,
          type: this.state.typeValue,
          fields: [],
        },
      }

      this.state.queryFields.forEach((a) => {
        newMultiMatch.multi_match.fields.push(a.field)
      })
      this.props.ADD(this.props.heirarchy, newMultiMatch)
    }
  }

  updateQueryFields = () => {
    let temp = this.state.queryFields
    let newID
    try {
      newID = temp[temp.length - 1]['id'] + 1
    } catch {
      newID = 0
    }

    let newQueryField = {
      id: newID,
      field: this.state.field,
    }
    this.setState({
      queryFields: [...temp, newQueryField],
      field: '',
    })
  }

  deleteItem = (id) => {
    this.setState({
      queryFields: this.state.queryFields.filter((a) => a['id'] !== id),
    })
  }
  render() {
    return (
      <div className='card'>
        {this.props.onDelete !== undefined ||
        this.props.heirarchy[this.props.heirarchy - 1] === 'Query' ? (
          <div className='card-header d-flex justify-content-between  align-items-center'>
            Multi Match
            <button
              onClick={(a) => this.props.onDelete(this.props.element)}
              type='button'
              className='btn btn-sm btn-danger'
            >
              Delete
            </button>
          </div>
        ) : (
          <div className='card-header'>Multi Match</div>
        )}
        <div className='card-body'>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='queryValue'
              placeholder='query'
              value={this.state.queryValue}
              onChange={(e) =>
                this.setState({
                  queryValue: e.target.value,
                })
              }
            />
            <label htmlFor='name'>query</label>
          </div>
          <select
            class='form-select'
            aria-label='select type'
            onChange={(a) => this.setState({ typeValue: a.target.value })}
          >
            <option>select type</option>
            {this.state.types.map((a) => (
              <option value={a}>{a}</option>
            ))}
          </select>

          {this.state.queryFields.length !== 0 ? (
            <table class='table'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Field</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.queryFields.map((queryField) => {
                  return (
                    <tr>
                      <th scope='row'>{queryField.id}</th>
                      <td>{queryField.field}</td>

                      <td>
                        <button
                          type='button'
                          onClick={() => this.deleteItem(queryField.id)}
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
              id='sortField'
              placeholder='Field Name'
              value={this.state.field}
              onChange={(e) =>
                this.setState({
                  field: e.target.value,
                })
              }
            />
            <label for='sortField'>Field Name</label>
          </div>
          <button
            type='button'
            className='btn btn-sm btn-success'
            onClick={this.updateQueryFields}
          >
            Add New Field
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

export default connect(mapStatetoProps, mapDispatchToProps)(MultiMatch)
