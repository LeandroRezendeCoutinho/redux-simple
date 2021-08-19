import "./Interval.css"
import React from "react"
import Card from "./Card";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const { min, max } = props

  return (
    <Card title='Number interval' red>
      <div className='Interval'>
        <span>
          <strong>Minimum</strong>
          <input type="number" value={min} onChange={e => props.onMinChange(+e.target.value)} />
        </span>
        <span>
          <strong>Maximum</strong>
          <input type="number" value={max} onChange={e => props.onMaxChange(+e.target.value)} />
        </span>
      </div>
    </Card>
  )
}