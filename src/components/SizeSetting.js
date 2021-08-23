import React, { Component } from "react";

class SizeSetting extends Component {
  onChangeSize(value) {
    this.props.onReceived_Size(value);
  }

  render() {
    return (
      <div className="card border-dark">
        <div className="card header bg-warning">
          <h3 className="card-title text-white">Size: {this.props.size}px</h3>
        </div>
        <div className="card-body">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.onChangeSize(2)}
          >
            Tang
          </button>
          <button
            type="button"
            className="btn btn-success "
            onClick={() => this.onChangeSize(-2)}
          >
            Giam
          </button>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
