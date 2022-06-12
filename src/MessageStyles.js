/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';

const group = css`
  position: fixed;
  top: 60px;
  right: 20px;
  z-index: 10000000;
  @media (max-width: 767px) {
    top: 0;
    right: 0;
    left: 0;
  }
`;
const item = (type) => {
  let background;
  if (type === 'info') {
    background = '#78a4fa';
  } else if (type === 'success') {
    background = '#13ce66';
  } else if (type === 'error') {
    background = '#ff4949';
  } else if (type === 'warning') {
    background = '#ffc82c';
  } else {
    background = '#78a4fa';
  }
  return css`
    word-break: break-word;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    line-height: 1.5;
    width: 300px;
    box-sizing: border-box;
    color: #ffffff;
    border-radius: 4px;
    padding: 10px 12px;
    font-size: 14px;
    margin-bottom: 15px;
    background: ${background};
    @media (max-width: 767px) {
      width: 100%;
      margin-bottom: 10px;
      border-radius: 0px;
    }
  `;
};
const itemWp = (state) => {
  const MessageEnter = keyframes`
    0% {
      opacity: 0;
      max-height: 0;
    }
    100% {
      opacity: 1;
      max-height: 100px;
    }`;
  const MessageExit = keyframes`
    0% {
      max-height: 100px;
    }
    100% {
      max-height: 0;
    }`;

  return css`
    overflow: hidden;
    animation-duration: 0.2s;
    animation-timing-function: linear;
    animation-name: ${state === 'exiting' ? MessageExit : MessageEnter};
  `;
};

const close = css`
  height: 21px;
  cursor: pointer;
  padding-left: 5px;
`;
export default { group, item, itemWp, close };
