import React, { Component } from 'react';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {pictureNumber: 1};
      }
    render() {
        return (
            <div>
                <div className="text-center">
                    <img src={`images/${this.state.pictureNumber}.jpg`} className="rounded" alt="..." style={{width: "300px"}}/>
                </div>
            <button className="btn btn-primary m-4" onClick={() => {
                if(this.state.pictureNumber !== 1) {
                    this.setState({pictureNumber: this.state.pictureNumber - 1})
                }
            }}>Prev</button>
            <button className="btn btn-primary m-4" onClick={() => {
                if(this.state.pictureNumber !== 6) {
                    this.setState({pictureNumber: this.state.pictureNumber + 1})
                }
            }}>Next</button>

            </div>
        );
    }
}

export default Slider;