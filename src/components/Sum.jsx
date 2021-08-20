import "./Interval.css"
import React from "react"
import Card from "./Card";
import { connect } from "react-redux";

const Sum = props => {
  const { min, max } = props
  return (
    <Card title='Numbers sum' blue>
      <div>
        <span>
          <span>Result:</span>
          <strong>{min + max}</strong>
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

export default connect(mapStateToProps)(Sum)