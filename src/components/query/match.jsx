import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Match extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="m-3 card">
          <div class="card-header ">Match</div>
          <div className="card-body">
            <div class="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Field Label"
              />
              <label for="name">Field Label</label>
            </div>
            <div class="form-floating">
              <input
                type="text"
                className="form-control"
                id="value"
                placeholder="Field Value"
              />
              <label for="value">Field Value</label>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Match;
