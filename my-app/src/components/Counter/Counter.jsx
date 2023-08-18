import { Component } from "react";
import './Counter.css'
import { Buttons } from "./Buttons";
import { Value } from "./Value";
// import propType from 'prop-types'
export class Counter extends Component{

    state = {
        value: 0,
    }

    handlerEncrement = () => {
        this.setState((prev) => {
            return {
                value: prev.value + 1
            }
        })
    }

    handlerDecrement = () => {
        this.setState((prev) => {
            return {
                value: prev.value - 1
            }
        })
    }
    render() {
        const {handlerDecrement, handlerEncrement} = this
        return <div className="Counter__controls">
            <Value
            value={this.state.value}
            />
            <Buttons
                onEncrement={handlerEncrement}
                onDecrement={handlerDecrement}
            />
        </div>
    }
}