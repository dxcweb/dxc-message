import React from 'react';
import addComponent from 'dxc-addcomponent';
import MessageGroup from './MessageGroup';
let message = null;
const addMsg = (type, content, duration) => {
  return message.addMsg(type, content, duration);
};
const safeAddMsg = (type, content, duration) => {
  return new Promise((resolve) => {
    if (!message) {
      const onReady = (me) => {
        message = me;
        addMsg(type, content, duration).then(() => {
          resolve();
        });
      };
      addComponent(() => {
        return <MessageGroup onReady={onReady} />;
      });
    } else {
      addMsg(type, content, duration).then(() => {
        resolve();
      });
    }
  });
};
export default {
  info: (content, duration) => {
    return safeAddMsg('info', content, duration);
  },
  success: (content, duration) => {
    return safeAddMsg('success', content, duration);
  },
  error: (content, duration) => {
    return safeAddMsg('error', content, duration);
  },
  warning: (content, duration) => {
    return safeAddMsg('warning', content, duration);
  },
};
