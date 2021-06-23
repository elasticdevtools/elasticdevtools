import React from "react";
import { useSelector } from "react-redux";

function QueryField(props) {
  return (
    <div className="m-2">
      <label for="query">Generated Query</label>
      <textarea className="form-control" id="query" rows="4">
        {useSelector((state) => JSON.stringify(state.queryReducer, null, 2))}
      </textarea>
    </div>
  );
}

export default QueryField;
