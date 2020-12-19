


import React ,{Component} from 'react';
import { Cell, Grid } from 'react-mdl';



class Home extends Component{
    render(){
        return(
            <div style = {{width:'100%', margin :"aut"}}>
                <Grid className = "home-grid">
                    <Cell col ={12}>
                       
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;