import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "yellow"],
    };
  }

  showColor(color) {
    return {
      backgroundColor: color,
    };
  }

  setActiveColor(color) {
    this.props.onReceived_Color(color);
  }

  render() {
    var colorBox = this.state.colors.map((color, index) => {
      return (
        <span
          key={index}
          style={this.showColor(color)}
          className={this.props.color === color ? "active" : ""}
          onClick={() => this.setActiveColor(color)}
        ></span>
      );
    });
    return (
      <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
        <div className="card border-primary">
          <div className="card header bg-primary">
            <h3 className="card-title text-white">Color Picker</h3>
          </div>
          <div className="card-body">{colorBox}</div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
