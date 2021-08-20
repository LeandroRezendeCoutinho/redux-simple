import "./Interval.css"
import React from "react"
import Card from "./Card";
import { connect } from "react-redux";

const Interval = props => {
  const { min, max } = props

  return (
    <Card title='Number interval' red>
      <div className='Interval'>
        <span>
          <strong>Minimum</strong>
          <input type="number" value={min} />
        </span>
        <span>
          <strong>Maximum</strong>
          <input type="number" value={max} />
        </span>
      </div>
    </Card>
  )
}

const mapStateToProps = state => {
  return {
    min: state.numbers.min,
    max: state.numbers.max
  }
}

export default connect(mapStateToProps)(Interval)