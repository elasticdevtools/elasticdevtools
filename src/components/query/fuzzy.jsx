import React, { Component } from 'react'
import { add, del, mod } from '../../reduxTools/actions'
import { connect } from 'react-redux'

class Fuzzy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      field: '',
      value: '',
      fuzziness: 'AUTO',
      max_expansions: 50,
      prefix_length: 0,
      transpositions: null,
      heirarchy: this.props.heirarchy,
    }
  }

  componentWillUnmount() {
    let newFuzzy = {
      fuzzy: {
        [this.state.field]: {
          value: this.state.value,
          fuzziness: this.state.fuzziness,
          max_expansions: this.state.max_expansions,
          prefix_length: this.state.prefix_length,
          transpositions: this.state.transpositions,
        },
      },
    }
    this.props.DELETE(this.props.heirarchy, newFuzzy)
  }

  submitFuzzy = () => {
    let newFuzzy = {
      fuzzy: {
        [this.state.field]: {
          value: this.state.value,
          fuzziness: this.state.fuzziness,
          max_expansions: this.state.max_expansions,
          prefix_length: this.state.prefix_length,
          transpositions: this.state.transpositions,
        },
      },
    }

    this.props.ADD(this.props.heirarchy, newFuzzy)
  }

  render() {
    return (
      <div className='card'>
        {this.props.onDelete !== undefined ||
        this.props.heirarchy[this.props.heirarchy - 1] === 'Query' ? (
          <div className='card-header d-flex justify-content-between  align-items-center'>
            Fuzzy
            <button
              onClick={(a) => this.props.onDelete(this.props.element)}
              type='button'
              className='btn btn-sm btn-danger'
            >
              Delete
            </button>
          </div>
        ) : (
          <div className='card-header'>Fuzzy</div>
        )}
        <div className='card-body'>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='field'
              placeholder='Field Name'
              value={this.state.field}
              onChange={(e) =>
                this.setState({
                  field: e.target.value,
                })
              }
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
              onChange={(e) =>
                this.setState({
                  value: e.target.value,
                })
              }
              required='true'
            />
            <label htmlFor='value'>Value</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='fuzziness'
              placeholder='Fuzziness'
              value={this.state.fuzziness}
              onChange={(e) =>
                this.setState({
                  fuzziness: e.target.value,
                })
              }
            />
            <label htmlFor='fuzziness'>Fuzziness (string)</label>
            <small id='fuzziness' className='form-text text-muted'>
              <a
                href='
https://www.elastic.co/guide/en/elasticsearch/reference/current/common-options.html#fuzziness'
              >
                see docs
              </a>
            </small>
          </div>

          <div className='form-floating mb-3'>
            <input
              type='number'
              className='form-control'
              id='maxExpansion'
              placeholder='maximum expansion'
              value={this.state.max_expansions}
              onChange={(e) =>
                this.setState({
                  max_expansions: e.target.value,
                })
              }
            />
            <label htmlFor='maxExpansion'>Maximum Expansion</label>
            <small id='maxExpansion' className='form-text text-muted'>
              Avoid using a high value in the max_expansions parameter,
              especially if the prefix_length parameter value is 0. High values
              in the max_expansions parameter can cause poor performance due to
              the high number of variations examined.
            </small>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='number'
              className='form-control'
              id='prefixLength'
              placeholder='prefix length'
              value={this.state.prefix_length}
              onChange={(e) =>
                this.setState({
                  prefix_length: e.target.value,
                })
              }
            />
            <label htmlFor='prefixLength'> Prefix Length (int)</label>
            <small id='prefixLength' className='form-text text-muted'>
              Number of beginning characters left unchanged when creating
              expansions.
            </small>
          </div>
          <div className='form-control'>
            <p>Transpositions (bool)</p>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='transpositions'
                id='transpositionsTrue'
                value={true}
                onClick={(e) =>
                  this.setState({
                    sortOrder: true,
                  })
                }
              />
              <label className='form-check-label ' for='transpositionsTrue'>
                True
              </label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='transpositions'
                id='transpositions'
                value={false}
                onClick={(e) =>
                  this.setState({
                    transpositions: false,
                  })
                }
              />
              <label className='form-check-label' for='transpositions'>
                False
              </label>
            </div>
          </div>

          <button
            type='button'
            className='btn btn-sm btn-success'
            onClick={this.submitFuzzy}
          >
            submit fuzzy
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

export default connect(mapStatetoProps, mapDispatchToProps)(Fuzzy)
