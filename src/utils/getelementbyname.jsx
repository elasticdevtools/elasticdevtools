import React from 'react'
import Bool from '../components/query/bool'
import Match from '../components/query/match'
import MatchPhrase from '../components/query/matchPhrase'
import Sort from '../components/main/sort'
import Source from '../components/main/source'
import Size from '../components/main/size'
import QuerySelector from '../components/main/querySelector'
import MultiMatch from '../components/query/multiMatch'
import Exists from '../components/query/exists'
import Fuzzy from '../components/query/fuzzy'
import Prefix from '../components/query/prefix'
import Range from '../components/query/range'
import Regex from '../components/query/regex'
import WildCard from '../components/query/wildCard'
function GetElementByName(props) {
  let result
  let value
  console.log('heir', JSON.stringify(props.element))
  if (typeof props.element === 'string') {
    value = props.element
  } else {
    value = props.element.value
  }
  let heir = [...props.heirarchy, props.element.value]

  if (value === 'Select Element...') {
    result = <React.Fragment></React.Fragment>
  } else if (value === 'Select Query Type...') {
    result = <React.Fragment></React.Fragment>
  } else if (value === 'Bool') {
    result = (
      <Bool
        onDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    )
  } else if (value === 'Match') {
    result = (
      <Match
        onDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    )
  } else if (value === 'Match Phrase') {
    result = (
      <MatchPhrase
        onDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    )
  } else if (value === 'Multi Match') {
    result = (
      <MultiMatch
        onDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    )
  } else if (value === 'Sort') {
    result = (
      <Sort
        onDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    )
  } else if (value === 'Source') {
    result = (
      <Source
        onDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    )
  } else if (value === 'Query') {
    result = (
      <QuerySelector
        onDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    )
  } else if (value === 'Size') {
    result = (
      <Size
        onDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    )
  } else if (value === 'Exists') {
    result = (
      <Exists
        onDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    )
  } else if (value === 'Fuzzy') {
    result = (
      <Fuzzy
        nDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    )
  } else if (value === 'Prefix') {
    result = (
      <Prefix
        nDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    )
  } else if (value === 'Range') {
    result = (
      <Range
        nDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    )
  } else if (value === 'Regex') {
    result = (
      <Regex
        nDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    )
  } else if (value === 'WildCard') {
    result = (
      <WildCard
        nDelete={props.onDelete}
        heirarchy={heir}
        element={props.element}
      />
    )
  }
  console.log(result)
  return result
}

export default GetElementByName
