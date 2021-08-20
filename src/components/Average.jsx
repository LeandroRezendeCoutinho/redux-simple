import "./Interval.css"
import React from "react"
import Card from "./Card";
import { connect } from "react-redux";

const Average = props => {
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

const mapStateToProps = state => {
  return {
    min: state.numbers.min,
    max: state.numbers.max
  }
}

export default connect(mapStateToProps)(Average)