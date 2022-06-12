
## example

Demo:

```tsx
import React from "react";
import message from "dxc-message";
import "dxc-normalize-css";
class demo extends React.PureComponent {
  info = ()=>{
    message.info('info')
  }
  success = ()=>{
    message.success('success')
  }
  error = ()=>{
    message.error('error')
  }
  warning = ()=>{
    message.error('warning')
  }
  duration = ()=>{
    message.error('延迟10秒关闭',10)
  }
  overlength = ()=>{
    message.error('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')
  }
  render() {
    return (
      <div>
        <div onClick={this.info}>info</div>
        <div onClick={this.success}>success</div>
        <div onClick={this.error}>error</div>
        <div onClick={this.warning}>warning</div>
        <div onClick={this.duration}>延迟10秒关闭</div>
        <div onClick={this.overlength}>超长文字</div>
      </div>
    );
  }
}
export default demo;


```
