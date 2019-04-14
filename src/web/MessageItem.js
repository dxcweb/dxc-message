import React from 'react';
import Block from 'dxc-flex';
import CloseSvg from './CloseSvg';

export default class MessageItem extends React.PureComponent {
  render() {
    const { children, onClose, state, type } = this.props;
    return (
      <div className={`item item-${state}`}>
        <Block vertical="start" className={`dxc-message-item dxc-message-item-${type}`}>
          <div style={{ flex: 1 }}>{children}</div>
          <Block onClick={onClose} vertical="center" className="dxc-message-item-close">
            <CloseSvg />
          </Block>
        </Block>
      </div>
    );
  }
}
