import React, { Component } from 'react'

class Sort extends Component {
    state = {
        field: '', // new field to sort on
        sortOrder: 'asc', // sort order
        sortingScheme: [], // all fields and their sort order
        heirarchy: ['Sort'],
    }

    updateSortingScheme = () => {
        let temp = this.state.sortingScheme
        let newSort = {
            field: this.state.field,
            sortOrder: this.state.sortOrder,
        }
        this.setState({
            sortingScheme: [...temp, newSort],
            field: '',
            sortOrder: 'asc',
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
                    <div className='card'>
                        {this.state.sortingScheme.map((scheme) => {
                            return (
                                <div className='card-body'>
                                    <p>
                                        {scheme.field}: {scheme.sortOrder}
                                    </p>
                                </div>
                            )
                        })}
                    </div>

                    <div className='card'>
                        <div className='card-body'>
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
                </div>
            </div>
        )
    }
}

export default Sort
