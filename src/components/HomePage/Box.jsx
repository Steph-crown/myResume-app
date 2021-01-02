import React, { Component } from 'react';
import './../../css/HomePage/Box.css';
import { ReactComponent as Arrow} from '../Svgs/Arrow.svg';



class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverState: false
        };
    }

    render() {
        return (
            <div className="box">
                <this.props.icon fill={ this.state.hoverState ? "red" : " #004A8F"} className="icon" />
                <h5>{this.props.header}</h5>
                <p>{this.props.text}</p>
                <Arrow fill=' #004A8F'/>
            </div>
        );
    }
}

export default Box;
