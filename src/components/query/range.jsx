import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'

// import reducer from "../../reduxTools/reducers";
import { add, del, mod } from '../../reduxTools/actions'

class Range extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      gt: '',
      gte: '',
      lt: '',
      lte: '',
    }
  }

  componentWillUnmount() {
    let newRange = {
      range: {
        [this.state.name]: {
          gt: [this.state.gt.length > 0 ? this.state.gt : null],
          gte: [this.state.gte.length > 0 ? this.state.gte : null],
          lt: [this.state.lt.length > 0 ? this.state.lt : null],
          lte: [this.state.lte.length > 0 ? this.state.lte : null],
        },
      },
    }
    this.props.DELETE(this.props.heirarchy, newRange)
  }
  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    })
    this.props.ADD(this.props.heirarchy, {
      range: {
        [event.target.value]: {},
      },
    })
  }

  submitRange = () => {
    let newRange = {
      range: {
        [this.state.name]: {
          gt: this.state.gt,
          gte: this.state.gte,
          lt: this.state.lt,
          lte: this.state.lte,
        },
      },
    }

    this.props.ADD(this.props.heirarchy, newRange)
  }

  render() {
    return (
      <React.Fragment>
        <div className='m-2 card'>
          {this.props.onDelete !== undefined ||
          this.props.heirarchy[this.props.heirarchy - 1] === 'Query' ? (
            <div className='card-header d-flex justify-content-between  align-items-center'>
              Range
              <button
                onClick={(a) => this.props.onDelete(this.props.element)}
                type='button'
                className='btn btn-sm btn-danger'
              >
                Delete
              </button>
            </div>
          ) : (
            <div className='card-header'>Range</div>
          )}
          <div className='card-body'>
            <div className='form-floating mb-3'>
              <input
                type='text'
                className='form-control'
                id='name'
                placeholder='Field Label'
                onChange={this.onChangeName}
              />
              <label htmlFor='name'>Field</label>
            </div>
            <div className='form-control'>
              <div className='form-floating'>
                <input
                  type='text'
                  className='form-control'
                  id='gt'
                  placeholder='gt'
                  onChange={(e) =>
                    this.setState({
                      gt: e.target.value,
                    })
                  }
                />
                <label htmlFor='value'>Greater than</label>
              </div>
              <div className='form-floating'>
                <input
                  type='text'
                  className='form-control'
                  id='gte'
                  placeholder='gte'
                  onChange={(e) =>
                    this.setState({
                      gte: e.target.value,
                    })
                  }
                />
                <label htmlFor='value'>Greater than equal to</label>
              </div>
              <div className='form-floating'>
                <input
                  type='text'
                  className='form-control'
                  id='lt'
                  placeholder='lt'
                  onChange={(e) =>
                    this.setState({
                      lt: e.target.value,
                    })
                  }
                />
                <label htmlFor='value'>Less than</label>
              </div>
              <div className='form-floating'>
                <input
                  type='text'
                  className='form-control'
                  id='lte'
                  placeholder='lte'
                  onChange={(e) =>
                    this.setState({
                      lte: e.target.value,
                    })
                  }
                />
                <label htmlFor='value'>Less than equal to</label>
              </div>
            </div>
            <button
              type='button'
              className='btn btn-sm btn-success'
              onClick={this.submitRange}
            >
              submit range
            </button>
          </div>
        </div>
      </React.Fragment>
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

export default connect(mapStatetoProps, mapDispatchToProps)(Range)
