import './App.css';
import { Layout, Header, Navigation,Drawer,Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import photo from './Components/Main.jpeg';
import Main from './Components/Main'



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
                <Link to ="/Project">Project</Link>
                <Link to ="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to ="/">Home</Link>
                <Link to ="/About">About</Link>
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
                        <img  id = "photo"
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
                <p className = 'aboutPara'>   Java | React | C#  </p>
                <div className ='links'>
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
