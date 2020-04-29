import React, { useRef, useEffect } from 'react';
import { Grid, Cell } from 'react-mdl';
import { TweenLite, Power3 } from 'gsap';

function About() {
  let avatar = useRef(null);

  useEffect(() => {
   TweenLite.from(avatar, .8, {
     opacity: 0,
     ease: Power3.easeIn,
     delay: .5
   })
  }, [])

  return (
    <div className='about-body'>
      <Grid className='about-grid'>
        <Cell col={8} style={{margin: '0 auto'}}>
        <div className='about-content-box'>
          <img
            src='https://cdn.pixabay.com/photo/2017/01/31/18/24/boy-2026226__340.png'
            alt='avatar'
            className='avatar'
            ref={el => avatar = el}
          />
            <h1>Hi, Mine Name is John Doe</h1>
            <hr /> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in malesuada tellus. Fusce hendrerit, urna ut ultricies feugiat, risus est dictum felis, nec aliquet ligula ligula a tortor. Suspendisse sit amet sagittis orci. Mauris eget libero sit amet ipsum rutrum consequat. Vivamus auctor, sem eu feugiat rutrum, ligula felis pellentesque tortor, et imperdiet lorem velit a purus. Aliquam eget mi non lectus mattis auctor ac id turpis. Cras scelerisque est sodales vehicula laoreet. Proin in ullamcorper nibh. Ut sed mauris scelerisque, pharetra est sit amet, eleifend orci. Sed in nisl id leo aliquet mollis. In hac habitasse platea dictumst. Nullam nunc massa, blandit efficitur ultrices et, egestas sit amet velit. Cras tempus ultrices eros, sed interdum nibh bibendum id. Integer a sollicitudin tortor, sed ultricies quam. Vivamus posuere leo nisl, vel varius mauris tristique et. Nam laoreet porttitor metus, at sagittis magna suscipit eget.</p>

            <p>Mauris sed mi ac felis rutrum efficitur. Nullam elementum libero nec nisi vehicula viverra. Ut finibus commodo tellus quis mollis. Ut sit amet arcu et sem ullamcorper pretium sollicitudin ac tortor. Suspendisse risus sem, vestibulum sollicitudin pharetra ut, pretium at urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla aliquet pulvinar fermentum. Cras id blandit justo, non aliquet odio. Nulla nec tempus lorem, sed semper nibh. Vestibulum porta ex libero, sit amet lobortis arcu scelerisque eget. Vivamus tincidunt, risus non aliquet placerat, lorem orci feugiat augue, eu porta erat lorem non risus. Ut mattis turpis eget quam interdum, a vestibulum ipsum fringilla.</p>

            <p>Proin ac velit orci. Vestibulum mattis dui a nibh tempus facilisis. In hac habitasse platea dictumst. Cras pulvinar, erat ut malesuada ultrices, odio tellus ultrices ligula, vel accumsan urna sapien at est. Curabitur vel libero nec ante mollis molestie sed eget diam. Sed quis convallis tellus. In pellentesque velit a porta sagittis. Ut et quam lobortis, semper nibh vel, condimentum dolor. Etiam eget felis nec nibh luctus consequat sit amet ac odio. Mauris molestie quis diam in auctor. Praesent vestibulum eget elit at feugiat. Nullam dictum ante leo, sit amet ornare mauris iaculis et. Sed dolor urna, interdum a elit id, feugiat venenatis orci. Vivamus bibendum, sem sit amet vulputate porttitor, turpis dui dapibus enim, id ultrices tortor tellus non ex. Ut tristique tellus dapibus, tempus est vulputate, fringilla enim.</p>

            <p>Vivamus sit amet diam urna. Maecenas et blandit sapien. Mauris id tellus eget ligula finibus cursus sed at lectus. Nunc justo tortor, fermentum id odio sed, consequat dignissim ipsum. Vestibulum lorem ante, maximus ut efficitur vel, tempus at dui. Mauris sodales ut neque rhoncus luctus. Praesent sodales ex at ipsum bibendum, eu laoreet mauris pharetra. Phasellus ac lectus id ipsum pharetra pulvinar id lacinia purus. Pellentesque fermentum vulputate semper. Morbi at egestas tellus. Sed vitae pretium nunc, id venenatis quam. Nullam maximus viverra tempus.</p>

            <p>Duis vulputate aliquet auctor. Donec est nulla, vulputate non sem eget, viverra mollis felis. In est sem, sagittis quis finibus ac, imperdiet sed mi. Etiam lobortis, orci ac bibendum dapibus, metus elit rhoncus justo, id ultrices metus mi tincidunt libero. Aenean mattis lacus mauris. Quisque id sem ut lectus placerat accumsan. Cras volutpat risus non lectus tincidunt suscipit. Nulla eu tristique ipsum. Quisque tempus vestibulum diam, a venenatis turpis viverra imperdiet. Ut at mauris eu lectus cursus fermentum. Nullam quis iaculis ex. Aenean vitae hendrerit dolor. Vestibulum justo nibh, aliquet quis turpis in, maximus sollicitudin tellus. Sed sit amet lorem sem. Vestibulum tincidunt, ante ac condimentum mattis, eros risus venenatis neque, id suscipit purus neque quis augue.</p>
            
            <div className='about-social-icons'>
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

export default About;