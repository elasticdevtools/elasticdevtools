import React, { Component } from 'react'
import { add, del, mod } from '../../reduxTools/actions'
import { connect } from 'react-redux'

class Regex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      field: '',
      valueRegex: '',
      heirarchy: this.props.heirarchy,
    }
  }

  componentWillUnmount() {
    let newFuzzy = {
      fuzzy: {
        [this.state.field]: {
          value: this.state.value,
        },
      },
    }
    this.props.DELETE(this.props.heirarchy, newFuzzy)
  }

  onFieldChange = (e) => {
    this.setState({
      field: e.target.value,
    })
    this.props.ADD(this.props.heirarchy, {
      regex: {
        [e.target.value]: {
          value: '',
        },
      },
    })
  }

  onValueChange = (e) => {
    this.setState({
      value: e.target.value,
    })
    this.props.ADD(this.props.heirarchy, {
      regex: {
        [this.state.field]: {
          value: e.target.value,
        },
      },
    })
  }

  render() {
    return (
      <div className='card'>
        {this.props.onDelete !== undefined ||
        this.props.heirarchy[this.props.heirarchy - 1] === 'Query' ? (
          <div className='card-header d-flex justify-content-between  align-items-center'>
            Regex
            <button
              onClick={(a) => this.props.onDelete(this.props.element)}
              type='button'
              className='btn btn-sm btn-danger'
            >
              Delete
            </button>
          </div>
        ) : (
          <div className='card-header'>Regex</div>
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
              required='true'
            />
            <label htmlFor='field '>Field Name</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='value'
              placeholder='Value'
              value={this.state.value}
              onChange={this.onValueChange}
              required='true'
            />
            <label htmlFor='value'>Value</label>
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

export default connect(mapStatetoProps, mapDispatchToProps)(Regex)
