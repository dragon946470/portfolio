import React ,{Component} from 'react';
import '../App.css';


class Contact extends Component{
      constructor(props){
          super(props);
          this.state ={
                       Name:"",
                       phone: "",
                       email: ""
                      }

      }

      handleNameChange = e => {
        this.setState({ Name: e.target.value });
        const fm = e.target.value
      };
    
      handleEmail = e => {
        this.setState({ email: e.target.value});
      };
    
      handleContact = e => {
        this.setState({ Contact: e.target.value});
       
      };

      onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    
        alert(`hey ${this.state.Name} your message was successful sent`);
        
        this.setState({Name:''})
       
        
        
        

       

    }
      

    
    render(){
        return(
            <form className ='register_components'>
                    <div> 
                        <p>Contact Me</p>
                        <label>
                            Name:
                            <input type="text" name="name" onChange={this.handleNameChange} value={this.state.Name}/>
                        </label>   
                    </div>
                    <br/>
                    <div>
                        <label>
                            Phone:
                            <input type="text" name="name" />
                         </label>
                    </div>
                    <br/>
                    <div>
                        <label>
                            Email:
                            <input type="text"  email ='email'/>
                        </label>
                    </div>
                    <button style={{background:'grey', borderRadius:'13px'}} onClick = {this.onFormSubmit}> Submit</button>
                    <p>I will respond soon as possible</p>
            </form>
        )
    }
}

export default Contact 