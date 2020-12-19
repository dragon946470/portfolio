
import React ,{Component} from 'react';
import { Tab, Tabs,Grid,Cell,Card, CardMenu,CardText,CardTitle, CardActions, Button, IconButton } from 'react-mdl';
 import mypicture from './Main.jpeg';
 import myresume from './Resume.pdf';

class About extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div> 
              
                <Card shadow= {5} style ={{minwith:'400', margin : 'auto'}}>
                    <CardTitle style= {{ color:"#fff", height:'175px',
                    background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyuBvQO8VQTWNNgfqGkS6yJZFBf8Pb3BDTCg&usqp=CAU)'}}>
                      My RobotFriends
                    </CardTitle>
                    <CardText className ="test-styling" style={{ background:'pink', fontFamily:'arial',color:'black',fontSize:'1em'}}>
                    I love software engineering and I always dream to become one of brillant software engineer
                    in the world. I dream to building things for the web. 
                    I don't have my bachelors degree in computer science yet, But I am already landing 
                    some strong, wonderful knowledge and skill for React full stack and also some knowledge 
                    in Python which I learned for two years.
                    I am always truggling to get at least one  software engineer internships
                     before I finish my 4 years college.
                    </CardText>
                    <CardActions border>
                    
                        <Button  colored  > 
                        <a  href ='https://github.com/abdel1413/myportfolio.git' style ={{textDecoration:'none'}}>
                        github 
                        </a>
                        </Button>
                        
                        <Button  colored>
                            <a href = { myresume} download style={{textDecoration:'none'}}> 
                               Resume 
                            </a> 
                        </Button>
                    </CardActions>
                    <CardMenu style ={{color:'#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
             </div>
        )
    }else if(this.state.activeTab === 1){
        return(
            <div  id ='my-pic'>
                <h1> Welcome to my picture page!</h1>
                <img src = {mypicture} alt =''/>
            </div>
        )
    }

}

    render(){
        return(
            <div className = 'category_tab'>
               <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab:tabId})} ripple>
                   <Tab>About Me</Tab>
                   <Tab>Image</Tab>
               </Tabs>
               <section>
                   <div className = 'project-grid'>
                       <Grid className = 'project-grid'>
                           <Cell col ={12}>
                               <div className ='proj-content'>
                                   {this.toggleCategories()}
                               </div>

                           </Cell>

                       </Grid>

                   </div>

               </section>

            </div>
        )
    }
}

export default About;