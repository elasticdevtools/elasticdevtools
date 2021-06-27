import React, { Component } from 'react'
import { add, del, mod } from '../../reduxTools/actions'
import { connect } from 'react-redux'

class Exists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      field: '',
      heirarchy: this.props.heirarchy,
    }
  }

  componentWillUnmount() {
    let newExists = {
      exists: {
        field: this.state.field,
      },
    }

    this.props.DELETE(this.props.heirarchy, newExists)
  }

  onChangeField = (e) => {
    this.setState({
      field: e.target.value,
    })

    let newExists = {
      exists: {
        field: e.target.value,
      },
    }

    this.props.ADD(this.props.heirarchy, newExists)
  }

  render() {
    return (
      <div className='card'>
        {this.props.onDelete !== undefined ||
        this.props.heirarchy[this.props.heirarchy - 1] === 'Query' ? (
          <div className='card-header d-flex justify-content-between  align-items-center'>
            Exists
            <button
              onClick={(a) => this.props.onDelete(this.props.element)}
              type='button'
              className='btn btn-sm btn-danger'
            >
              Delete
            </button>
          </div>
        ) : (
          <div className='card-header'>Exists</div>
        )}
        <div className='card-body'>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='field'
              placeholder='Field Name'
              value={this.state.field}
              onChange={this.onChangeField}
            />
            <label for='sortField'>Field Name</label>
          </div>
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

export default connect(mapStatetoProps, mapDispatchToProps)(Exists)
