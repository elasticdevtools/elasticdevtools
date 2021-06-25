import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div className="m-2 card">
        <div className="card-header d-flex justify-content-between  align-items-center">
          Sort
          <button
            onClick={(a) => this.props.onDelete(this.props.element)}
            type="button"
            className="btn btn-sm btn-danger"
          >
            Delete
          </button>
        </div>
        <div className="card-body">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Field Name"
            />
            <label for="floatingInput">Field Name</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label" for="inlineRadio1">
              Ascending
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" for="inlineRadio2">
              Descending
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Sort;
