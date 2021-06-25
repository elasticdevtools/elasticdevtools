import React, { Component } from "react";
import Match from "./match";
import "bootstrap/dist/css/bootstrap.css";

class Bool extends Component {
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
          <div>
            <Match heirarchy={[1, 2, 3]} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Bool;
