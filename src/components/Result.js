import React, { Component } from "react";

class Result extends Component {
  setContentColor() {
    return {
      color: this.props.color,
      borderColor: this.props.color,
      fontSize: this.props.size,
    };
  }
  render() {
    return (
      <div className="col-xs-12 col-lg-12 col-sm-12 col-md-12">
        <p>
          Coler: {this.props.color} - Size : {this.props.size}px{" "}
        </p>
        <div className="content" style={this.setContentColor()}>
          Nội dung setting
        </div>
      </div>
    );
  }
}

export default Result;
