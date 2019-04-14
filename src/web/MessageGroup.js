import React from "react";
import { TransitionGroup, Transition } from "react-transition-group";
import MessageItem from "./MessageItem";
import Block from "dxc-flex";
import "../../assets/Message.less";
export default class MessageGroup extends React.PureComponent {
  state = { item: [] };
  componentDidMount() {
    const { onReady } = this.props;
    onReady && onReady(this);
  }
  componentWillUnmount() {
    timeouts.forEach((timeout) => {
      clearTimeout(timeout);
    });
  }
  timeouts = [];

  addMsg(type, content, duration = 3) {
    return new Promise((resolve) => {
      const id = Math.round(Math.random() * 1000000);
      const row = {
        id,
        content,
        type,
      };
      const { item } = this.state;
      this.setState({ item: [...item, row] }, () => {
        resolve();
      });
      if (duration !== 0) {
        const timeout = setTimeout(() => {
          this.onCloseItem(id);
        }, duration * 1000);
        this.timeouts.push(timeout);
      }
    });
  }
  onCloseItem = (id) => {
    const item = this.state.item.filter((row) => {
      return row.id !== id;
    });
    this.setState({ item: [...item] });
  };
  render() {
    const { item } = this.state;
    return (
      <Block className="dxc-message-group" el={TransitionGroup} layout="vertical">
        {item.map(({ id, content, type }, index) => {
          return (
            <Transition key={id} timeout={200}>
              {(state) => (
                <MessageItem type={type} state={state} onClose={this.onCloseItem.bind(this, id)}>
                  {content}
                </MessageItem>
              )}
            </Transition>
          );
        })}
      </Block>
    );
  }
}
