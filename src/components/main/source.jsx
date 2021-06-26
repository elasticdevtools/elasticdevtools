import React, { Component } from 'react'
import { add, del, mod } from '../../reduxTools/actions'
import { connect } from 'react-redux'

class Source extends Component {
  constructor(props) {
    super(props)
    this.state = {
      field: '', // new projection field
      projectionFields: [],
      heirarchy: this.props.heirarchy,
    }
  }

  componentWillUnmount() {
    let newSource = {
      _source: [],
    }

    this.state.projectionFields.forEach((a) => {
      newSource._source.push(a.field)
    })

    this.props.DELETE(this.props.heirarchy, newSource)
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (
      this.state.projectionFields.length !== prevState.projectionFields.length
    ) {
      let newSource = {
        _source: [],
      }
      this.state.projectionFields.forEach((a) => {
        newSource._source.push(a.field)
      })
      this.props.ADD(this.props.heirarchy, newSource)
    }
  }

  updateProjectionFields = () => {
    let temp = this.state.projectionFields
    let newID
    try {
      newID = temp[temp.length - 1]['id'] + 1
    } catch {
      newID = 0
    }

    let newProjectionField = {
      id: newID,
      field: this.state.field,
    }
    this.setState({
      projectionFields: [...temp, newProjectionField],
      field: '',
    })
  }

  deleteItem = (id) => {
    this.setState({
      projectionFields: this.state.projectionFields.filter(
        (a) => a['id'] !== id
      ),
    })
  }

  render() {
    return (
      <div className='card'>
        <div className='card-header d-flex justify-content-between  align-items-center'>
          _Source
          <button
            onClick={(a) => this.props.onDelete(this.props.element)}
            type='button'
            className='btn btn-sm btn-danger'
          >
            Delete
          </button>
        </div>
        <div className='card-body'>
          {this.state.projectionFields.length !== 0 ? (
            <table class='table'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Field</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.projectionFields.map((projectionField) => {
                  return (
                    <tr>
                      <th scope='row'>{projectionField.id}</th>
                      <td>{projectionField.field}</td>

                      <td>
                        <button
                          type='button'
                          onClick={() => this.deleteItem(projectionField.id)}
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
            onClick={this.updateProjectionFields}
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

export default connect(mapStatetoProps, mapDispatchToProps)(Source)
