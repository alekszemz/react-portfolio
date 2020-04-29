import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Form from './Form';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: "center"}}>
              <img 
              src='https://cdn.pixabay.com/photo/2017/01/31/18/24/boy-2026226__340.png' 
              alt='avatar'
              style={{height: '200px'}} 
              />
            </div>
            <h2 style={{paddingTop: '1em'}}>John Doe</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{border: '3px solid rgba(45,164,201,1)', width: '50%'}} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum non erat non bibendum. Nulla facilisi. Sed tellus quam, venenatis quis fringilla vitae, aliquet vel massa. Maecenas eget ligula ex. Cras dictum dui pellentesque arcu vehicula suscipit. Aliquam sed neque ac tortor lacinia scelerisque vitae in risus. Vestibulum vitae malesuada arcu.</p>
            <hr style={{border: '3px solid rgba(45,164,201,1)', width: '50%'}} />
            <h5>Address</h5>
            <p>1 Long Way Road, Fartown, London LO1 FA3</p>
            <h5>Phone</h5>
            <p>+370 456-123-789</p>
            <h5>Email</h5>
            <p>some@email.com</p>
            <h5>Web Site</h5>
            <p>mywebsite.com</p>
            <hr style={{border: '3px solid rgba(45,164,201,1)', width: '50%'}} />
            <h4 style={{color: 'grey'}}>Have question type below</h4>
            <Form />
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>
            <Education 
              startYear={2002}
              endYear={2006}
              schoolName={'First Univercity'}
              schoolDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id scelerisque neque. Duis bibendum arcu ac ex accumsan congue. Nullam quam arcu, varius at leo ut, consequat malesuada arcu.'}
            />

            <Education 
              startYear={2007}
              endYear={2009}
              schoolName={'Second Univercity'}
              schoolDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id scelerisque neque. Duis bibendum arcu ac ex accumsan congue. Nullam quam arcu, varius at leo ut, consequat malesuada arcu.'}
            />
            <hr style={{borderTop: '3px solid #fff'}}/>
            <h2>Experience</h2>
            <Experience 
              startYear={2009}
              endYear={2012}
              jobName={'My First Job'}
              jobDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id scelerisque neque. Duis bibendum arcu ac ex accumsan congue. Nullam quam arcu, varius at leo ut, consequat malesuada arcu.'}
            />

            <Experience 
              startYear={2012}
              endYear={2014}
              jobName={'My Second Job'}
              jobDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id scelerisque neque. Duis bibendum arcu ac ex accumsan congue. Nullam quam arcu, varius at leo ut, consequat malesuada arcu.'}
            />
            <hr style={{borderTop: '3px solid #fff'}}/>
            <h2>Skills</h2>
            <Skills 
              skill={'HTML/CSS'}
              progress={100}
            />
            <Skills 
              skill={'JavaScript'}
              progress={80}
            />
            <Skills 
              skill={'NodeJS'}
              progress={60}
            />
            <Skills 
              skill={'React'}
              progress={70}
            />
            <Skills 
              skill={'MongoDB'}
              progress={90}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;