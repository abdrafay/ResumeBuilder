import './App.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Resume from './Components/Resume';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, Container, TextField } from '@mui/material';
import {useReducer, useEffect, useState} from 'react'
import StateContext from './StateContext'
import DispatchContext from './DispatchContext'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExperienceFormFields from './Components/ExperienceFormFields';
const drawerWidth = 240;

function App() {
  const initialState = {
    bio: {
      firstName: 'Abdul',
      lastName: 'Rafay',
      designation: 'MERN Stack Developer',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Userimage.png',
      about: "I'm a web designer for Fiserv, specializing in web design, graphic design, and UX.",
      phone: '03212434323',
      address: 'Shah latif, Karachi, Sindh',
      email: 'zainrafay12@gmail.com',
      website: 'https://example.com/'
    },
    experience: [
      // {
      //   designation: 'Technical Consultant',
      //   company: 'Fiserv',
      //   timeSpan: 'Apr 2018 - Now'
      // },
      // {
      //   designation: 'Web Designer',
      //   company: 'Lynden',
      //   timeSpan: 'Jan 2018 - Apr 2018'
      // },
      // {
      //   designation: 'Intern - Web Design',
      //   company: 'Lynden',
      //   timeSpan: 'Aug 2017 - Dec 2017'
      // }
    ],
    education: [{
      qualification: 'Bachelor of Science In Artificial Intelligence',
      school: 'Fast Nuces KHI',
      timeSpan: 'Jan. 2016 - Apr. 2018'
    },
    {
      qualification: 'Computer Science',
      school: 'Edmonds Community College',
      timeSpan: 'Sept. 2014 - Dec. 2015'
    },

    ]
  }
  function ourReducer(state, action){
    switch (action.type) {
      case "BIO_UPDATE":
        return {...state, bio: action.payload }
      case "EXPERIENCE_UPDATE":
        return {...state, experience: action.payload}
      default:
    }
}
  const [state, dispatch] = useReducer(ourReducer, initialState);
  const [accordionExp, setAccordionExp] = useState({
    basic: false,
    experience: false,
    education: false,
    technologies: false,
    tools: false
  })
  const handleAccordionExp = () => {
    setAccordionExp()
  }
  // accordion
  const [basicExpanded, setBasicExpanded] = useState(false);

  const handleBasicChange = (panel) => (event, isExpanded) => {
    setBasicExpanded(isExpanded ? panel : false);
    
  };
  const [experienceExpanded, setexperienceExpanded] = useState(false);

  const handleexperienceChange = (panel) => (event, isExpanded) => {
    setexperienceExpanded(isExpanded ? panel : false);
  }
  const [educationExpanded, seteducationExpanded] = useState(false);

  const handleeducationChange = (panel) => (event, isExpanded) => {
    seteducationExpanded(isExpanded ? panel : false);
  }
  const [technologiesExpanded, settechnologiesExpanded] = useState(false);

  const handletechnologiesChange = (panel) => (event, isExpanded) => {
    settechnologiesExpanded(isExpanded ? panel : false);
  }
  const [toolsExpanded, settoolsExpanded] = useState(false);

  const handletoolsChange = (panel) => (event, isExpanded) => {
    settoolsExpanded(isExpanded ? panel : false);
  }

  const [bio, setBio] = useState({
      firstName: 'First Name',
      lastName: 'Last Name',
      designation: 'Designation',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Userimage.png',
      about: "about",
      phone: '+92 0000000',
      address: 'Location',
      email: 'example@example.com',
      website: 'example.com'
  })
  const [experience, setExperience] = useState([]);
  const handleExperience = (exp) => {
    setExperience([...experience, exp]);
  } 
  const [expList, setExpList] = useState([]);
  const addExpBtn = () => {
    setExpList(expList.concat(<ExperienceFormFields count={experience.length+1} key={expList.length} handleExperience={handleExperience} />))
  }
  useEffect(() => {
    if(bio) {
      dispatch({type: "BIO_UPDATE", payload: bio})
    }
  },[bio])
  useEffect(() => {
    if(experience) {
      dispatch({type: "EXPERIENCE_UPDATE", payload: experience})
    }
  })
  return (
    <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {/* {['Basic details', 'Skills and Expertise', 'Education', 'Experience', 'Activities', 'Volunteering', 'Awards'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <ArrowForwardIosIcon/>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
              <Divider />
            </ListItem>
            
          ))} */}
       
      <Accordion expanded={accordionExp.basic} onChange={() => setAccordionExp({...accordionExp, basic: !accordionExp.basic})}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
            Basic Details
        </AccordionSummary>
        <AccordionDetails>
          <TextField value={bio.firstName} onChange={(e) => setBio({...bio, firstName: e.target.value})} label="Fist Name" variant="standard" />
          <TextField value={bio.lastName} onChange={(e) => setBio({...bio, lastName: e.target.value})} label="Last Name" variant="standard" />
          <TextField value={bio.url} onChange={(e) => setBio({...bio, url: e.target.value})} label="Image URL" variant="standard" />
          <TextField value={bio.designation} onChange={(e) => setBio({...bio, designation: e.target.value })} label="Designation" variant="standard" />
          <TextField value={bio.about} onChange={(e) => setBio({...bio, about: e.target.value})} label="About" variant="standard" />
          <TextField value={bio.email} onChange={(e) => setBio({...bio, email: e.target.value})} label="email" variant="standard" />
          <TextField value={bio.phone} onChange={(e) => setBio({...bio, phone: e.target.value})} label="Phone No" variant="standard" />
          <TextField value={bio.address} onChange={(e) => setBio({...bio, address: e.target.value})} label="Location" variant="standard" />
          <TextField value={bio.website} onChange={(e) => setBio({...bio, website: e.target.value})} label="website" variant="standard" />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={experienceExpanded === 'panel1'} onChange={handleexperienceChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
           Experience
        </AccordionSummary>
          <AccordionDetails>
            
            {expList}
            <Button variant="contained" onClick={addExpBtn}>Add +</Button>
          </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion expanded={educationExpanded === 'panel1'} onChange={handleeducationChange('panel1')}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
           Education
        </AccordionSummary>
      </Accordion>
      {/*  */}
      <Accordion expanded={technologiesExpanded === 'panel1'} onChange={handletechnologiesChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            Technologies
        </AccordionSummary>
      </Accordion>
          

          
        </List>
        
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
     
        <Container disableGutters>
            <Resume />
        </Container>
      </Box>
    </Box>
    </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
