import React from "react";
import Bool from "../components/query/bool";
import Match from "../components/query/match";
import MatchPhrase from "../components/query/matchPhrase";
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
  } else if (value === "Select Query Type...") {
    result = <React.Fragment></React.Fragment>;
  } else if (value === "Bool") {
    result = (
      <Bool
        onDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    );
  } else if (value === "Match") {
    result = (
      <Match
        onDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    );
  } else if (value === "Match Phrase") {
    result = (
      <MatchPhrase
        onDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    );
  } else if (value === "Sort") {
    result = (
      <Sort
        onDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    );
  } else if (value === "Query") {
    result = (
      <QuerySelector
        onDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    );
  }
  console.log(result);
  return result;
}

export default GetElementByName;
