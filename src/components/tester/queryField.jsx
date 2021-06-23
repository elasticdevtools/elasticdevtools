import React from "react";
import { useSelector } from "react-redux";

function QueryField(props) {
  const { a, b } = props;
  console.log(
    "Ye wala",
    useSelector((state) => state)
  );
  return (
    <div className="m-2">
      <label for="query">Field Label</label>

      <textarea className="form-control" id="query" rows="4">
        {useSelector((state) => JSON.stringify(state, null, 2))}
      </textarea>
    </div>
  );
}

export default QueryField;
