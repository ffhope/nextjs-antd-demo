import * as React from 'react';

interface Props {
  type: string;
  size?: number;
  color?: string;
  style?: any;
}

export default class Icon extends React.Component<Props> {
  public render() {
    const { color, type, size, style } = this.props
    const args = {
      ...style,
      color: color,
      fontSize: size ? `${size}px` : "1em",
    }
    const icon = (
      <svg
        style={{...args}}
        className="icon" aria-hidden="true" >
        <use xlinkHref={`#icon-${type}`}></use>
      </svg>
    )
    return icon
  }
}
