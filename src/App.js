// import React , { Components} from 'react'
import './App.css';
import { Layout, Header, Navigation,Drawer,Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import photo from './Components/Main.jpeg';
import Main from './Components/Main'
// import About from './Components/About';
// import Resume from './Components/Resume';
// import Project from './Components/Project';
// import Contact from './Components/Contact';
// import Home from './Components/Home';


import { Cell, Grid } from 'react-mdl';


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <Layout>
        <Header  className = 'header' title="Title" scroll>
            <Navigation>
            <Link to ="/">Home</Link>
                <Link to ="/About">About</Link>
                <Link to ="/Resume">Resume</Link>
                <Link to ="/Project">Project</Link>
                <Link to ="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to ="/">Home</Link>
                <Link to ="/About">About</Link>
                <Link to ="/Resume">Resume</Link>
                <Link to ="/Project">Project</Link>
                <Link to ="/Contact">Contact</Link>
            </Navigation>
            
        </Drawer>
        <Content>
            <div className="page-content" />

            <Main/>

            <div className = "cont" style ={ {width : '100%', margin : 'auto'}}>
                <Grid className = 'content'>
                      <Cell col = {10}> 
                      {/* <div id = "photo-container" > */} 
                        <img  id = "photo"
                        //  src ='https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png'
                        //  alt="avator" />

                        src ={photo} alt =''/> 
                          {/* </div> */}
                        <h2>Jose Patrone</h2>
                    </Cell>
                </Grid>
            </div>
            <div className = 'text-banner'>

                <h1>
                  Web Developer, Software Engineering, and Game Designer
                </h1>
                <hr/>
                <p>   Java | React | C#  </p>
                <div className ='Social_Links'>
                    <a  href ='https://github.com/dragon946470'>
                    
                    </a>
                    <a  href ='https://bobandweave2.itch.io/bobandweave2' >
      
                    </a>
                    
                    <a  href ='https://dragon946470.itch.io/attack-of-spheres'>
                
                    </a>

                 

                </div>
            </div>
            
        </Content>
    </Layout>

      </header>
    </div>
  );
}

export default App;
