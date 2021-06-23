import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

// import reducer from "../../reduxTools/reducers";
import { add, del, mod } from "../../reduxTools/actions";

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: "",
    };
  }
  componentWillUnmount() {
    this.props.DELETE(this.props.heirarchy, {
      match: {
        [this.state.value]: this.state.value,
      },
    });
  }
  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
    this.props.ADD(this.props.heirarchy, {
      match: {
        [event.target.value]: this.state.value,
      },
    });
  };
  onChangeValue = (event) => {
    this.setState({
      value: event.target.value,
    });
    this.props.ADD(this.props.heirarchy, {
      match: {
        [this.state.name]: event.target.value,
      },
    });
    console.log(
      JSON.stringify(
        {
          match: {
            [this.state.name]: event.target.value,
          },
        },
        null,
        2
      )
    );
  };
  render() {
    return (
      <React.Fragment>
        <div className="m-3 card">
          <div class="card-header d-flex justify-content-between  align-items-center">
            Match
            <button
              // onClick={}
              type="button"
              class="btn btn-sm btn-danger"
            >
              Delete
            </button>
          </div>
          <div className="card-body">
            <div class="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Field Label"
                onChange={this.onChangeName}
              />
              <label for="name">Field Label</label>
            </div>
            <div class="form-floating">
              <input
                type="text"
                className="form-control"
                id="value"
                placeholder="Field Value"
                onChange={this.onChangeValue}
              />
              <label for="value">Field Value</label>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (props) => {
  return {
    queryReducer: props.queryReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ADD: (h, obj) => dispatch(add(h, obj)),
    DELETE: (h, obj) => dispatch(del(h, obj)),
    MODIFY: (h, obj) => dispatch(mod(h, obj)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Match);
