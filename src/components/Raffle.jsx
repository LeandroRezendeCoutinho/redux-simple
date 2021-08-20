import "./Interval.css"
import React from "react"
import Card from "./Card";
import { connect } from "react-redux";

const Raffle = props => {
  const { min, max } = props
  const random = parseInt(Math.random() * (max - min)) + min

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

const mapStateToProps = state => {
  return {
    min: state.numbers.min,
    max: state.numbers.max
  }
}

export default connect(mapStateToProps)(Raffle)