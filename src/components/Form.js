import React, {Component} from 'react';
import { Textfield, Button } from 'react-mdl';

class Form extends Component {
  render() {
    return (
      <div>
      <Textfield
      onChange={() => {}}
      label="Type text here..."
      rows={3}
      style={{width: '100%', color: '#000'}}
      />
      <Button raised style={{float: 'right'}}>SEND</Button>
      </div>
    );
  }
}

export default Form;