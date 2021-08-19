import "./Interval.css"
import React from "react"
import Card from "./Card";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  return (
    <Card title='Number interval' red>
      <div className='Interval'>
        <span>
          <strong>Minimum</strong>
          <input type="number" value={0} />
        </span>
        <span>
          <strong>Maximum</strong>
          <input type="number" value={10} />
        </span>
      </div>
    </Card>
  )
}