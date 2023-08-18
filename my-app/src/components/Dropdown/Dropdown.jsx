import './Dropdown.css'
import {Components} from 'react'

export class Dropdown extends Components {

    state = {
        visible: false
    }

    show = () => {
        this.setState({
            visible: true
        })
 
    }

    hide = () => {
this.setState({
            visible: false
        })
    }

    render() {
<div className="Dropdown">
          <button
            type="button"
            className="Dropdown__toggle"
            onClick = {this.show}
          >
          Open
          </button>
          <button
            type="button"
            className="Dropdown__toggle"
            onClick={this.hide}
          >
          Close
          </button>
          {this.state.visible && <div 
                                    className="Dropdown__menu">
                                    Випадаюче меню
                                  </div>}
        </div>
        
       
        
    }
}