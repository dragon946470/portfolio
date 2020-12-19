import React ,{Component} from 'react';
import { Tab, Tabs,Grid,Cell,Card, CardMenu,CardText,CardTitle, CardActions, Button, IconButton } from 'react-mdl';
import merge from './image/1_2.jpg';

class Project extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div> 
              
                <Card shadow= {5} style ={{ margin : 'auto'}}>
                    <CardTitle style= {{ height: '200px', background:{merge}}}>
                        <img src = {merge} alt =''/>
            
                    </CardTitle>
                    <CardText>
                      
                    </CardText>
                    <CardActions border>
                        <Button  colored>
                        <a  href ='https://bobandweave2.itch.io/bobandweave2' style ={{textDecoration:'none'}}  >
                             bobandweave2
                             </a>
                             </Button>
                        <Button  colored> 
                        <a  href ='https://dragon946470.itch.io/attack-of-spheres' style ={{textDecoration:'none'}} >
                        AttackOfSphere 
                        </a>
                        </Button>
                    </CardActions>
                    <CardMenu style ={{color:'#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
             </div>
        )
   
        }
}

    render(){
        return(
            <div className = 'category_tab'>
               <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab:tabId})} ripple>
                   <Tab>Project</Tab>   
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

export default Project;