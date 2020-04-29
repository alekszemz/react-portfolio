import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 }
  }
  toggleCategories() {
    if(this.state.activeTab === 0) {
      return (
        <div className='projects-content-box'>
        {/* project 1  */}
        <Card shadow={5} style={{minWidth: '450', margin: '0 auto 10px auto'}}>
          <CardTitle style={
            {
              color: '#fff',
              height: '200px',
              background: 'url(https://images.unsplash.com/photo-1555940280-66bf87aa823d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) center / cover'
            }}> React Project #1
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet posuere urna, ut pharetra urna tempor gravida. Aenean pulvinar sollicitudin metus, eget ultricies nibh.
          </CardText>
          <CardActions border>
           <Button colored>GitHub</Button>
           <Button colored>CodePen</Button>
           <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
           <IconButton name='share' />
          </CardMenu>
        </Card>

        {/* project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: '0 auto 10px auto'}}>
          <CardTitle style={
            {
              color: '#fff',
              height: '200px',
              background: 'url(https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) center / cover'
            }}> React Project #2
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet posuere urna, ut pharetra urna tempor gravida. Aenean pulvinar sollicitudin metus, eget ultricies nibh.
          </CardText>
          <CardActions border>
           <Button colored>GitHub</Button>
           <Button colored>CodePen</Button>
           <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
           <IconButton name='share' />
          </CardMenu>
        </Card>

        {/* project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: '0 auto 10px auto'}}>
          <CardTitle style={
            {
              color: '#fff',
              height: '200px',
              background: 'url(https://images.unsplash.com/photo-1578091879915-33ee869e2cd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) center / cover'
            }}> React Project #3
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet posuere urna, ut pharetra urna tempor gravida. Aenean pulvinar sollicitudin metus, eget ultricies nibh.
          </CardText>
          <CardActions border>
           <Button colored>GitHub</Button>
           <Button colored>CodePen</Button>
           <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
           <IconButton name='share' />
          </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className='projects-content-box'>
        {/* project 1  */}
        <Card shadow={5} style={{minWidth: '450', margin: '0 auto 10px auto'}}>
          <CardTitle style={
            {
              color: '#fff',
              height: '200px',
              background: 'url(https://images.unsplash.com/photo-1582731595896-f959c4fb1509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) center / cover'
            }}>Angular Project #1
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet posuere urna, ut pharetra urna tempor gravida. Aenean pulvinar sollicitudin metus, eget ultricies nibh.
          </CardText>
          <CardActions border>
           <Button colored>GitHub</Button>
           <Button colored>CodePen</Button>
           <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
           <IconButton name='share' />
          </CardMenu>
        </Card>

        {/* project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: '0 auto 10px auto'}}>
          <CardTitle style={
            {
              color: '#fff',
              height: '200px',
              background: 'url(https://images.unsplash.com/photo-1572314493295-09c6d5ec3cdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) center / cover'
            }}>Angular Project #2
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet posuere urna, ut pharetra urna tempor gravida. Aenean pulvinar sollicitudin metus, eget ultricies nibh.
          </CardText>
          <CardActions border>
           <Button colored>GitHub</Button>
           <Button colored>CodePen</Button>
           <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
           <IconButton name='share' />
          </CardMenu>
        </Card>

        {/* project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: '0 auto 10px auto'}}>
          <CardTitle style={
            {
              color: '#fff',
              height: '200px',
              background: 'url(https://images.unsplash.com/photo-1586231918894-340f4166c299?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) center / cover'
            }}>Angular Project #3
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet posuere urna, ut pharetra urna tempor gravida. Aenean pulvinar sollicitudin metus, eget ultricies nibh.
          </CardText>
          <CardActions border>
           <Button colored>GitHub</Button>
           <Button colored>CodePen</Button>
           <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
           <IconButton name='share' />
          </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className='projects-content-box'>
        {/* project 1  */}
        <Card shadow={5} style={{minWidth: '450', margin: '0 auto 10px auto'}}>
          <CardTitle style={
            {
              color: '#fff',
              height: '200px',
              background: 'url(https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) center / cover'
            }}>VueJS Project #1
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet posuere urna, ut pharetra urna tempor gravida. Aenean pulvinar sollicitudin metus, eget ultricies nibh.
          </CardText>
          <CardActions border>
           <Button colored>GitHub</Button>
           <Button colored>CodePen</Button>
           <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
           <IconButton name='share' />
          </CardMenu>
        </Card>

        {/* project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: '0 auto 10px auto'}}>
          <CardTitle style={
            {
              color: '#fff',
              height: '200px',
              background: 'url(https://images.unsplash.com/photo-1571858988466-4ce22289a885?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) center / cover'
            }}>VueJS Project #2
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet posuere urna, ut pharetra urna tempor gravida. Aenean pulvinar sollicitudin metus, eget ultricies nibh.
          </CardText>
          <CardActions border>
           <Button colored>GitHub</Button>
           <Button colored>CodePen</Button>
           <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
           <IconButton name='share' />
          </CardMenu>
        </Card>

        {/* project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: '0 auto 10px auto'}}>
          <CardTitle style={
            {
              color: '#fff',
              height: '200px',
              background: 'url(https://images.unsplash.com/photo-1546433970-ae3c35917a58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) center / cover'
            }}>VueJS Project #3
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet posuere urna, ut pharetra urna tempor gravida. Aenean pulvinar sollicitudin metus, eget ultricies nibh.
          </CardText>
          <CardActions border>
           <Button colored>GitHub</Button>
           <Button colored>CodePen</Button>
           <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
           <IconButton name='share' />
          </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className='projects-content-box'>
        {/* project 1  */}
        <Card shadow={5} style={{minWidth: '450', margin: '0 auto 10px auto'}}>
          <CardTitle style={
            {
              color: '#fff',
              height: '200px',
              background: 'url(https://images.unsplash.com/photo-1567603452239-067dfeba033f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) center / cover'
            }}>MangoDB Project #1
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet posuere urna, ut pharetra urna tempor gravida. Aenean pulvinar sollicitudin metus, eget ultricies nibh.
          </CardText>
          <CardActions border>
           <Button colored>GitHub</Button>
           <Button colored>CodePen</Button>
           <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
           <IconButton name='share' />
          </CardMenu>
        </Card>

        {/* project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: '0 auto 10px auto'}}>
          <CardTitle style={
            {
              color: '#fff',
              height: '200px',
              background: 'url(https://images.unsplash.com/photo-1576450684081-b55c6e7a3131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) center / cover'
            }}>MangoDB Project #2
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet posuere urna, ut pharetra urna tempor gravida. Aenean pulvinar sollicitudin metus, eget ultricies nibh.
          </CardText>
          <CardActions border>
           <Button colored>GitHub</Button>
           <Button colored>CodePen</Button>
           <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
           <IconButton name='share' />
          </CardMenu>
        </Card>

        {/* project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: '0 auto 10px auto'}}>
          <CardTitle style={
            {
              color: '#fff',
              height: '200px',
              background: 'url(https://images.unsplash.com/photo-1582575650013-ff9a7c395d3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) center / cover'
            }}>MangoDB Project #3
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet posuere urna, ut pharetra urna tempor gravida. Aenean pulvinar sollicitudin metus, eget ultricies nibh.
          </CardText>
          <CardActions border>
           <Button colored>GitHub</Button>
           <Button colored>CodePen</Button>
           <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
           <IconButton name='share' />
          </CardMenu>
        </Card>
        </div>
      )
    } else {
      console.log('Hmm... something is  wrong');
    }
  }

  render() {
    return (
      <div className='category-tabs'>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MangoDB</Tab>
        </Tabs>
        <section className='project-grid'>
          <Grid className='project-grid'>
            <Cell col={12}>
              <div className='content'>
                {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;