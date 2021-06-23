import React, { Component } from "react";
import Match from "./match";
import "bootstrap/dist/css/bootstrap.css";

class Bool extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello</h1>
        <div className="card m-2">
          <div className="card-header">Bool</div>
          <div>
            {/* <Match /> */}
            <Match heirarchy={[1, 2, 3]} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Bool;
