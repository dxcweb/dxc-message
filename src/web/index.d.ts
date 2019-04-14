import * as React from 'react';

declare type ConfigContent = React.ReactNode | string;
declare type ConfigDuration = number | (() => void);
export declare type ConfigOnClose = () => void;
export interface MessageApi {
  info(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose);
  success(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose);
  error(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose);
  warn(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose);
  warning(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose);
}
declare const _default: MessageApi;
export default _default;