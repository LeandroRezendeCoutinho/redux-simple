import "./Interval.css"
import React from "react"
import Card from "./Card";
import { connect } from "react-redux";
import { alterMaxNumber, alterMinNumber } from "../store/actions/numbers";

function Interval(props) {
  const { min, max } = props

  return (
    <Card title='Number interval' red>
      <div className='Interval'>
        <span>
          <strong>Minimum</strong>
          <input type="number" value={min}
            onChange={e => props.alterMin(+e.target.value)} />
        </span>
        <span>
          <strong>Maximum</strong>
          <input type="number" value={max}
            onChange={e => props.alterMax(+e.target.value)} />
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

function mapDispatchToProps(dispatch) {
  return {
    alterMin(newNumber) {
      const action = alterMinNumber(newNumber)
      dispatch(action)
    },
    alterMax(newNumber) {
      const action = alterMaxNumber(newNumber)
      dispatch(action)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Interval)