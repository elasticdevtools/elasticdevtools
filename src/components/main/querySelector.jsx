import React, { Component } from "react";
import GetElementByName from "../../utils/getelementbyname";

class QuerySelector extends Component {
  state = {
    // options: ["Query", "Sort", "Aggs", "Source", "Size"],
    options: ["Bool", "Match"],
    fieldValue: "Select Element...",
    heirarchy: this.props.heirarchy,
  };
  render() {
    return (
      <div className="card">
        <div className="card-header d-flex justify-content-between  align-items-center">
          Query
          <button
            // onClick={}
            type="button"
            className="btn btn-sm btn-danger"
          >
            Delete
          </button>
        </div>
        <div className="card-body">
          <select
            class="form-select"
            aria-label="Query Type Selector"
            onChange={(a) => this.setState({ fieldValue: a.target.value })}
          >
            <option>Select Element...</option>
            {this.state.options.map((a) => (
              <option value={a}>{a}</option>
            ))}
          </select>
          <GetElementByName
            key={this.state.fieldValue}
            element={this.state.fieldValue}
            heirarchy={this.state.heirarchy}
          />
        </div>
      </div>
    );
  }
}

export default QuerySelector;
