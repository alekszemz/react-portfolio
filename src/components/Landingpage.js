import React, { useRef, useEffect } from 'react';
import { Grid, Cell } from 'react-mdl';
import { TweenLite, Power3 } from 'gsap';

// animations
function Landing() {
  let landingBody = useRef(null);
  let avatar = useRef(null);
  let h1 = useRef(null);
  let hr = useRef(null);
  let h5 = useRef(null);
  let p = useRef(null);

  useEffect(() => {
    TweenLite.to(landingBody, 0, {css: {visibility: 'visible'}})
  })

  useEffect(() => {
    TweenLite.from(avatar, .8, {
      opacity: 0,
      ease: Power3.easeIn,
      delay: 1
    })
   }, [])

  useEffect(() => {
    TweenLite.staggerFrom([h1, hr, h5, p], .8, {opacity: 0, y: 20, ease: Power3.easeOut}, 1.5)
  }, [])
  
  return (
    <div ref={el => landingBody = el} className='landing-body'>
      <Grid>
        <Cell col={5} style={{margin: '0 auto'}}>
        <div className='landing-content-box'>
          <img
            src='https://cdn.pixabay.com/photo/2017/01/31/18/24/boy-2026226__340.png'
            alt='avatar'
            className='avatar'
            ref={el => avatar = el}
          />
            <h1 ref={el => h1 = el}>Hi, Mine Name is John Doe and I'm Full Stack Web Developer</h1>
            <hr ref={el => hr = el} /> 
            <h5 ref={el => h5 = el}>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MangoDB</h5>
            <p ref={el => p = el}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna ipsum, pulvinar sit amet urna eu, maximus tincidunt mauris. Etiam ac dapibus nibh, ut iaculis quam. Etiam vel tempor velit, sed rhoncus ante. Quisque quis consequat ligula. Quisque feugiat neque mattis lacus fringilla bibendum.</p>
            
            <div className='landing-social-icons'>
              {/* linkedIn */}
              <a href='https://www.google.com/' target='_blank' rel="noopener noreferrer">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>

              {/* github */}
              <a href='https://www.google.com/' target='_blank' rel="noopener noreferrer">
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>

              {/* freecodecamp */}
              <a href='https://www.google.com/' target='_blank' rel="noopener noreferrer">
                <i className="fa fa-free-code-camp" aria-hidden="true"></i>
              </a>

              {/* youtube */}
              <a href='https://www.google.com/' target='_blank' rel="noopener noreferrer">
                <i className="fa fa-youtube-square" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Landing;