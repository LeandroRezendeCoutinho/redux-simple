import "./Interval.css"
import React from "react"
import Card from "./Card";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  return (
    <Card title='Numbers sum' blue>
      <div>
        <span>
          <span>Result:</span>
          <strong>{10}</strong>
        </span>
      </div>
    </Card>
  )
}