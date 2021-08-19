import "./Interval.css"
import React from "react"
import Card from "./Card";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const { min, max } = props
  const random = parseInt(Math.random() * (max - min) + min)

  return (
    <Card title='Numbers raffle' purple>
      <div>
        <span>
          <span>Result:</span>
          <strong>{random}</strong>
        </span>
      </div>
    </Card>
  )
}