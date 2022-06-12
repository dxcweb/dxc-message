/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import React from 'react';
import Block from 'dxc-flex';
import CloseSvg from './CloseSvg';
import styles from './MessageStyles';
export default class MessageItem extends React.PureComponent {
  render() {
    const { children, onClose, state, type } = this.props;
    console.log(3333, styles.itemWp(state));
    return (
      <div css={styles.itemWp(state)}>
        <Block vertical='start' css={styles.item(type)}>
          <div style={{ flex: 1 }}>{children}</div>
          <Block onClick={onClose} vertical='center' css={styles.close}>
            <CloseSvg />
          </Block>
        </Block>
      </div>
    );
  }
}
