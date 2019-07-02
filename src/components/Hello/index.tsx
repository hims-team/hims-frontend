// react libraries
import * as React from 'react';

// interfaces
import { HelloProps } from './interfaces';

class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <h1>{this.props.hello} This is the development build of the HIMS app</h1>
  }
}

export default Hello;
