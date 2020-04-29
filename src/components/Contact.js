import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>John Doe</h2>
            <img
            src='https://cdn.pixabay.com/photo/2017/01/31/18/24/boy-2026226__340.png' 
            alt='avatar' 
            style={{height: '250px'}}
            />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum non erat non bibendum. Nulla facilisi. Sed tellus quam, venenatis quis fringilla vitae, aliquet vel massa. Maecenas eget ligula ex. Cras dictum dui pellentesque arcu vehicula suscipit. Aliquam sed neque ac tortor lacinia scelerisque vitae in risus. Vestibulum vitae malesuada arcu.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent style={{fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"> +370 345-698-577</i>
                    
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"> +370 345-698-577</i>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"> some@email.com</i>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"> MySkypeId</i>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;