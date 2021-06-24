import React from "react";
import Bool from "../components/query/bool";
import Match from "../components/query/match";
import Sort from "../components/main/sort";
import QuerySelector from "../components/main/querySelector";

function GetElementByName(props) {
  let result;
  let value;
  console.log("heir", JSON.stringify(props.element));
  if (typeof props.element === "string") {
    value = props.element;
  } else {
    value = props.element.value;
  }
  let heir = [...props.heirarchy, props.element.value];
  if (value === "Select Element...") {
    result = <React.Fragment></React.Fragment>;
  } else if (value === "Bool") {
    result = <Bool heirarchy={heir} />;
  } else if (value === "Match") {
    result = <Match heirarchy={heir} />;
  } else if (value === "Sort") {
    result = <Sort heirarchy={heir} />;
  } else if (value === "Query") {
    result = <QuerySelector heirarchy={heir} />;
  }
  console.log(result);
  return result;
}

export default GetElementByName;
