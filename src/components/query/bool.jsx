import React, { Component } from "react";
import GetElementByName from "../../utils/getelementbyname";
import "bootstrap/dist/css/bootstrap.css";

class Bool extends Component {
  state = {
    options: ["Bool", "Match", "Match Phrase"],
    must: [],
    mustNot: [],
    should: [],
    filter: [],
    heirarchy: this.props.heirarchy,
    mustFieldValue: "Select Element...",
    mustNotFieldValue: "Select Element...",
    shouldFieldValue: "Select Element...",
    filterFieldValue: "Select Element...",
  };

  handleDelete = (elem) => {
    this.setState({
      [elem.list]: this.state[elem.list].filter((a) => a.id !== elem.id),
    });
  };

  updateMust = () => {
    let temp = this.state.must;
    let newKey;
    try {
      newKey = temp[temp.length - 1].key + 1;
    } catch {
      newKey = 0;
    }
    let newElement = {
      list: "must",
      key: newKey,
      value: this.state.mustFieldValue,
    };
    console.log(newElement);
    this.setState({
      must: [...temp, newElement],
      mustFieldValue: "Select Element...",
    });
  };
  updateMustNot = () => {
    let temp = this.state.mustNot;
    let newKey;
    try {
      newKey = temp[temp.length - 1].key + 1;
    } catch {
      newKey = 0;
    }
    let newElement = {
      list: "mustNot",
      key: newKey,
      value: this.state.mustNotFieldValue,
    };
    console.log(newElement);
    this.setState({
      mustNot: [...temp, newElement],
      mustNotFieldValue: "Select Element...",
    });
  };
  updateShould = () => {
    let temp = this.state.should;
    let newKey;
    try {
      newKey = temp[temp.length - 1].key + 1;
    } catch {
      newKey = 0;
    }
    let newElement = {
      list: "should",
      key: newKey,
      value: this.state.shouldFieldValue,
    };
    console.log(newElement);
    this.setState({
      should: [...temp, newElement],
      shouldFieldValue: "Select Element...",
    });
  };
  updateFilter = () => {
    let temp = this.state.filter;
    let newKey;
    try {
      newKey = temp[temp.length - 1].key + 1;
    } catch {
      newKey = 0;
    }
    let newElement = {
      list: "filter",
      key: newKey,
      value: this.state.filterFieldValue,
    };
    console.log(newElement);
    this.setState({
      filter: [...temp, newElement],
      filterFieldValue: "Select Element...",
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="card m-2">
          {this.props.onDelete !== undefined ||
          this.props.heirarchy[this.props.heirarchy - 1] === "Query" ? (
            <div className="card-header d-flex justify-content-between  align-items-center">
              Bool
              <button
                onClick={(a) => this.props.onDelete(this.props.element)}
                type="button"
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </div>
          ) : (
            <div className="card-header">Bool</div>
          )}
          <div className="card-body">
            <h6>Must</h6>
            {this.state.must.map((a) => (
              <GetElementByName
                key={a.key}
                heirarchy={this.state.heirarchy}
                onDelete={this.handleDelete}
                element={a}
              />
            ))}
            <div className="input-group">
              <select
                className="form-select"
                id="inputGroupSelect01"
                onChange={(a) =>
                  this.setState({ mustFieldValue: a.target.value })
                }
                aria-label="must"
                value={this.state.mustFieldValue}
              >
                <option>Select Element...</option>
                {this.state.options.map((a) => (
                  <option value={a}>{a}</option>
                ))}
              </select>
              <button
                onClick={this.updateMust}
                className="btn btn-primary ml-2"
                type="button"
              >
                ADD
              </button>
            </div>
          </div>
          <div className="card-body">
            <h6>Must Not</h6>
            {this.state.mustNot.map((a) => (
              <GetElementByName
                key={a.key}
                heirarchy={this.state.heirarchy}
                onDelete={this.handleDelete}
                element={a}
              />
            ))}
            <div className="input-group">
              <select
                className="form-select"
                id="inputGroupSelect01"
                onChange={(a) =>
                  this.setState({ mustNotFieldValue: a.target.value })
                }
                aria-label="must"
                value={this.state.mustNotFieldValue}
              >
                <option>Select Element...</option>
                {this.state.options.map((a) => (
                  <option value={a}>{a}</option>
                ))}
              </select>
              <button
                onClick={this.updateMustNot}
                className="btn btn-primary ml-2"
                type="button"
              >
                ADD
              </button>
            </div>
          </div>
          <div className="card-body">
            <h6>Should</h6>
            {this.state.should.map((a) => (
              <GetElementByName
                key={a.key}
                heirarchy={this.state.heirarchy}
                onDelete={this.handleDelete}
                element={a}
              />
            ))}
            <div className="input-group">
              <select
                className="form-select"
                id="inputGroupSelect01"
                onChange={(a) =>
                  this.setState({ shouldFieldValue: a.target.value })
                }
                aria-label="must"
                value={this.state.shouldFieldValue}
              >
                <option>Select Element...</option>
                {this.state.options.map((a) => (
                  <option value={a}>{a}</option>
                ))}
              </select>
              <button
                onClick={this.updateShould}
                className="btn btn-primary ml-2"
                type="button"
              >
                ADD
              </button>
            </div>
          </div>
          <div className="card-body">
            <h6>Filter</h6>
            {this.state.filter.map((a) => (
              <GetElementByName
                key={a.key}
                heirarchy={this.state.heirarchy}
                onDelete={this.handleDelete}
                element={a}
              />
            ))}
            <div className="input-group">
              <select
                className="form-select"
                id="inputGroupSelect01"
                onChange={(a) =>
                  this.setState({ filterFieldValue: a.target.value })
                }
                aria-label="must"
                value={this.state.filterFieldValue}
              >
                <option>Select Element...</option>
                {this.state.options.map((a) => (
                  <option value={a}>{a}</option>
                ))}
              </select>
              <button
                onClick={this.updateFilter}
                className="btn btn-primary ml-2"
                type="button"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Bool;
