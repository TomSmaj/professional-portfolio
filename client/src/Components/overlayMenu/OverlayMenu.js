import React, { Component } from "react";
import "./OverlayMenu.css";
import indLayer from "./indLayer";

class OverlayMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layers: this.props.layers,
            currentLayer: this.props.currentLayer
        }
        this.createMenu = this.createMenu.bind(this);
    }

    createMenu = () => {
        let layers = [];
        for(let i = 0; i < this.state.layers; i++){
            layers.push(<div className="layer"><indLayer currentLayer={this.state.currentLayer} layerNum={i}/></div>);
        }

        return layers;
    }

    render() {
        return (
            <div className="overlayMenu">
                {this.createMenu()}
            </div>
        );
    }
}

export default OverlayMenu;