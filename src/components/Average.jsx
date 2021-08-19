import "./Interval.css"
import React from "react"
import Card from "./Card";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  // const min = props.min
  // const max = props.max

  const { min, max } = props
  return (
    <Card title='Numbers average' green>
      <div>
        <span>
          <span>Result:</span>
          <strong>{(max + min) / 2}</strong>
        </span>
      </div>
    </Card>
  )
}