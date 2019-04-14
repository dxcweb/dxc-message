# dxc-message

全局消息函数

## 安装

```
yarn add dxc-message
```

## 例子

```
import message from "dxc-message";

message.info('info');
message.success('success');
message.error('error');
message.warning('warning');

```

[在线例子](http://www.dxcweb.com/api/dxc-message/examples/simple.html)

## api

```
message.success(content, [duration])
```

<table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th style="width: 100px;">参数</th>
            <th style="width: 210px;">类型</th>
            <th>默认</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>content</td>
            <td>React.ReactNode | string</td>
            <td></td>
            <td>消息内容</td>
          </tr>
          <tr>
            <td>duration</td>
            <td>number</td>
            <td>3</td>
            <td>自动关闭的延时，单位秒。设为 0 时不自动关闭。</td>
          </tr>
        </tbody>
      </table>
