import React, { Component } from "react";
import ReactDOM from "react-dom";
import message from "dxc-message";

class Simple extends Component {
  onClick = () => {
    message.error("error");
  };
  onClickMulti = async () => {
    await message.info("info");
    await message.success("success");
    await message.error("error");
    await message.warning("warning");
  };
  onClickDuration = () => {
    message.info("info", 10);
  };
  onClickNoAuto = () => {
    message.warning("warning", 0);
  };
  render() {
    return (
      <div style={{ margin: 50 }}>
        <div onClick={this.onClick}>弹出一个</div>
        <div style={{ marginTop: 10 }} onClick={this.onClickMulti}>
          同时弹出多个
        </div>

        <div style={{ marginTop: 10 }} onClick={this.onClickDuration}>
          10秒后自动关闭
        </div>

        <div style={{ marginTop: 10 }} onClick={this.onClickNoAuto}>
          不自动关闭
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Simple />, document.getElementById("__react-content"));
