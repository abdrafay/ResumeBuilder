import React, {useContext} from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import StateContext from '../StateContext';


const Resume = () => {
    const appState = useContext(StateContext);
  return (
    <div>
        <div className="resume">
  <div className="base">
    <div className="profile">
      <div className="photo">
        <img src={appState.bio.url} />
      </div>
      <div className="info">
        <h1 className="name">{appState.bio.firstName + " " + appState.bio.lastName}</h1>
        <h2 className="job">{appState.bio.designation}</h2>
      </div>
    </div>
    <div className="about">
      <h3>About Me</h3>
      <p>{appState.bio.about}</p>
    </div>
    <div className="contact">
      <h3>Contact Me</h3>
      <div className="call"><a href={`tel:${appState.bio.phone}`}><i className="fas fa-phone"></i><span>{appState.bio.phone}</span></a></div>
      <div className="address"><a href="#"><i className="fas fa-map-marker"></i><span>{appState.bio.address}</span></a>
      </div>
      <div className="email"><a href={`mailto:${appState.bio.email}`}><i className="fas fa-envelope"></i><span>{appState.bio.email}</span></a></div>
      <div className="website"><a href={appState.bio.website} target="_blank"> <i className="fas fa-home"></i><span>{appState.bio.website}</span></a></div>
    </div>
    <div className="follow">
      <h3>Follow Me</h3>
      <div className="box">
       
        <a href="#" target="_blank"><i className="fab fa-instagram "></i></a>
        <a href="#" target="_blank"><i className="fab fa-pinterest"></i></a>
        <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a href="#" target="_blank"><i className="fab fa-codepen"></i></a>
        <a href="#" target="_blank"><i className="fab fa-behance"></i></a>
      </div>
    </div>
  </div>
  <div className="func">
    <div className="work">
      <h3><i className="fa fa-briefcase"></i>Experience</h3>
      <ul>
        {appState.experience.length > 0 ? appState.experience.map((item, index) => (<li key={index}><span>{item.designation}</span><small>{item.company}</small><small>{item.timeSpan}</small></li> )): "" }
      </ul>
    </div>
    <div className="edu">
      <h3><i className="fa fa-graduation-cap"></i>Education</h3>
      <ul>
        {appState.education ? appState.education.map((item, index) => (
            <li key={index}><span>{item.qualification}</span><small>{item.school}</small><small>{item.timeSpan}</small></li>
        )) : ''}    
    </ul>
    </div>
    <div className="skills-prog">
      <h3><i className="fas fa-code"></i>Technologies</h3>
      <ul>
        <li><span>HTML5</span>
        </li>
        <li ><span>CSS3 & SCSS</span>
          
        </li>
        <li ><span>JavaScript</span>
          
        </li>
        <li ><span>jQuery</span>
          
        </li>
        <li ><span>JSON</span>
          
        </li>
        <li ><span>PHP</span>
          
        </li>
        <li ><span>MySQL</span>
          
        </li>
      </ul>
    </div>
    <div className="skills-soft">
      <h3><i className="fas fa-bezier-curve"></i>Frameworks and tools</h3>
      <ul>
        <li data-percent="90">
            Illustrator
        </li>
        <li data-percent="75">
          Photoshop
        </li>
        <li data-percent="85">
          Indesign
        </li>
      </ul>
    </div>
    
  </div>
</div>
    </div>
  )
}

export default Resume
