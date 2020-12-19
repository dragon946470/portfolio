
import React ,{Component} from 'react';
import { Tab, Tabs,Grid,Cell,Card, CardMenu,CardText,CardTitle, CardActions, Button, IconButton } from 'react-mdl';
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
              
                
                   <p className = 'aboutPara' >
                  I am a software engineering solving problems. I created two games and I provided the links for them.<br/>
                  I am building games and applications to upload for everyone can enjoy. I am skill in java, C#, and React.<br/>
                  I am improving my skills as a computer science. Computer science had improven my understanding of programming and I as well<br/>
                  teach others in programming for them to understand, what I have learn. I am soon to finish 4 year of college next semester to start<br/>
                  my carrer as a software engineering or full stack engineering. 
                   </p>
                    <CardText className ="test-styling" style={{ background:'black', fontFamily:'arial',color:'black',fontSize:'1em'}}>
                   
                    </CardText>
                    <CardActions border>
                    
                        <Button  colored  > 
                        <a  href ='https://github.com/dragon946470/portfolio' style ={{textDecoration:'none'}}>
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

             </div>
        )
    }

}

    render(){
        return(
            <div className = 'category_tab'>
               <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab:tabId})} ripple>
                   <Tab>About Me</Tab>
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