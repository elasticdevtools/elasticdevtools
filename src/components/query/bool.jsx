import React, { Component } from "react";
import Match from "./match";
import "bootstrap/dist/css/bootstrap.css";

class Bool extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card m-2">
          <div className="card-header d-flex justify-content-between  align-items-center">
            Bool
            <button
              // onClick={}
              type="button"
              className="btn btn-sm btn-danger"
            >
              Delete
            </button>
          </div>
          <div>
            <Match heirarchy={[1, 2, 3]} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Bool;
