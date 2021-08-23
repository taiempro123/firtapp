import React, { Component } from "react";
import "./App.css";
import Reset from "./components/Reset";
import Result from "./components/Result";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      size: 15,
    };

    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
  }

  onSetColor(param) {
    this.setState({
      color: param,
    });
  }

  onChangeSize(param) {
    if (this.state.size + param >= 8 && this.state.size + param <= 36) {
      this.setState({
        size: this.state.size + param,
      });
    }
  }

  onReset = (param) => {
    if (param === true) {
      this.setState({
        color: "red",
        size: 15,
      });
    }
  };
  render() {
    return (
      <div className="container ">
        <div className="row">
          <ColorPicker
            color={this.state.color}
            onReceived_Color={this.onSetColor}
          />
          <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <SizeSetting
              size={this.state.size}
              onReceived_Size={this.onChangeSize}
            />
            <Reset onReceived_Reset={this.onReset} />
          </div>
          <Result color={this.state.color} size={this.state.size} />
        </div>
      </div>
    );
  }
}

export default App;
