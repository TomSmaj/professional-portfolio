import React, { Component } from "react";

class indLayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layerNum: this.props.layerNum,
            currentLayer: this.props.currentLayer
        }
        this.createLayer = this.createLayer.bind(this);
    }

    createLayer = () => {
        
    }

    render() {
        return (
            <div>
                {this.createLayer()}
            </div>
        );
    }
}

export default indLayer;