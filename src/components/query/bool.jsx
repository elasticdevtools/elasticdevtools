import React, { Component } from "react";
import GetElementByName from "../../utils/getelementbyname";
import "bootstrap/dist/css/bootstrap.css";

class Bool extends Component {
  state = {
    options: ["Bool", "Match", "Match Phrase"],
    must: [],
    mustNot: [],
    should: [],
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
          <div className="card g-2">
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
                value={this.state.fieldValue1}
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
        </div>
      </React.Fragment>
    );
  }
}

export default Bool;
