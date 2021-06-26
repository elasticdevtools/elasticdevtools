import React, { Component } from 'react'
import { add, del, mod } from '../../reduxTools/actions'
import { connect } from 'react-redux'
class Sort extends Component {
  state = {
    field: '', // new field to sort on
    sortOrder: 'asc', // sort order
    sortingScheme: [], // all fields and their sort order
    heirarchy: this.props.heirarchy,
  }

  componentWillUnmount() {
    let newSort = {
      sort: [],
    }

    this.state.sortingScheme.forEach((scheme) => {
      newSort.sort.push({
        [scheme.field]: {
          order: [scheme.sortOrder],
        },
      })
    })
    this.props.DELETE(this.props.heirarchy, newSort)
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (this.state.sortingScheme.length !== prevState.sortingScheme.length) {
      let newSort = {
        sort: [],
      }

      this.state.sortingScheme.forEach((scheme) => {
        newSort.sort.push({
          [scheme.field]: {
            order: [scheme.sortOrder],
          },
        })
      })

      this.props.ADD(this.props.heirarchy, newSort)
    }
  }

  updateSortingScheme = () => {
    let temp = this.state.sortingScheme
    let newID
    try {
      newID = temp[temp.length - 1]['id'] + 1
    } catch {
      newID = 0
    }
    let newSort = {
      id: newID,
      field: this.state.field,
      sortOrder: this.state.sortOrder,
    }
    this.setState({
      sortingScheme: [...temp, newSort],
      field: '',
      sortOrder: 'asc',
    })
  }

  deleteItem = (id) => {
    this.setState({
      sortingScheme: this.state.sortingScheme.filter((a) => a['id'] !== id),
    })
  }

  render() {
    return (
      <div className='card'>
        <div className='card-header d-flex justify-content-between  align-items-center'>
          Sort
          <button
            onClick={(a) => this.props.onDelete(this.props.element)}
            type='button'
            className='btn btn-sm btn-danger'
          >
            Delete
          </button>
        </div>
        <div className='card-body'>
          {this.state.sortingScheme.length !== 0 ? (
            <table class='table'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Field</th>
                  <th scope='col'>Order</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.sortingScheme.map((scheme) => {
                  return (
                    <tr>
                      <th scope='row'>{scheme.id}</th>
                      <td>{scheme.field}</td>
                      <td>{scheme.sortOrder}</td>
                      <td>
                        <button
                          type='button'
                          onClick={() => this.deleteItem(scheme.id)}
                          class='btn btn-sm btn-danger'
                        >
                          Delete
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

          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='sortOrder'
              id='asc'
              value='asc'
              onClick={(e) =>
                this.setState({
                  sortOrder: e.target.value,
                })
              }
            />
            <label className='form-check-label' for='asc'>
              Asc
            </label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='sortOrder'
              id='desc'
              value='desc'
              onClick={(e) =>
                this.setState({
                  sortOrder: e.target.value,
                })
              }
            />
            <label className='form-check-label' for='desc'>
              Desc
            </label>
          </div>
          <button
            type='button'
            className='btn btn-sm btn-success'
            onClick={this.updateSortingScheme}
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

export default connect(mapStatetoProps, mapDispatchToProps)(Sort)
