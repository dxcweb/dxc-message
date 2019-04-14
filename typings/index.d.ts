import * as React from 'react';
declare type ConfigContent = React.ReactNode | string;
declare type ConfigDuration = number | (() => void);
export interface MessageApi {
  info(content: ConfigContent, duration?: ConfigDuration);
  success(content: ConfigContent, duration?: ConfigDuration);
  error(content: ConfigContent, duration?: ConfigDuration);
  warning(content: ConfigContent, duration?: ConfigDuration);
}
declare const _default: MessageApi;
export default _default;