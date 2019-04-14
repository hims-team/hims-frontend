// react libraries
import * as React from 'react';
import * as ReactDom from 'react-dom';

// components
import Hello  from '../components/Hello';

const root = document.getElementById('root');

ReactDom.render(<Hello hello='Hello' />, root);
