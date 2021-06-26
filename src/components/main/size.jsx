import React, { Component } from 'react'
import { add, del, mod } from '../../reduxTools/actions'
import { connect } from 'react-redux'

class Size extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 10,
      heirarchy: this.props.heirarchy,
    }
  }

  componentWillUnmount() {
    this.props.DELETE(this.props.heirarchy, { size: this.state.size })
  }

  handleSizeChange = (event) => {
    this.setState({
      size: event.target.value,
    })
    this.props.ADD(this.props.heirarchy, {
      size: event.target.value,
    })
  }

  render() {
    return (
      <div className='card'>
        <div className='card-header d-flex justify-content-between  align-items-center'>
          Size
          <button
            onClick={(a) => this.props.onDelete(this.props.element)}
            type='button'
            className='btn btn-sm btn-danger'
          >
            Delete
          </button>
        </div>
        <div className='card-body'>
          <div className='form-floating mb-3'>
            <input
              type='number'
              className='form-control'
              id='sizeID'
              placeholder='set Size'
              value={this.state.size}
              onChange={this.handleSizeChange}
            />
            <label htmlFor='sizeID' className='form-label'>
              select size between [0, 10000]
            </label>
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

export default connect(mapStatetoProps, mapDispatchToProps)(Size)
