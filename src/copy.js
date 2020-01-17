import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      issue: ''
      }
  }

  componentDidMount() {
    console.log("mounted")
  }

  onSubmit = async (e) => {
    e.preventDefault();
    console.log('submitted');
    // const {email, username, issue} = this.state;

    console.log(this.state);

    // const data = {email, name : username, issue};

    let result = await axios.post('http://127.0.0.1:3000', {
      email : this.state.email,
      name : this.state.username,
      issue: this.state.issue
    });

    console.log(result);

    


    

    // try{
    // let result = await axios({ method : 'POST', url: 'http://localhost:3000', data });
    // if(result){
    //   alert('form submitted successfully');
    // }
    // }catch(e){
    //   console.log(e);
    // }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
        [name]: value
    })
  }

  render() { 
    return ( 
      <div className="App">
        <form method="POST" className="App-header">
        <p>{this.state.username}</p>
        <p>{this.state.email}</p>
        <p>{this.state.issue}</p>
          <div className="input-group">
            <label>Name: </label>
            <input 
              type="text" 
              placeholder="username" 
              name="username"
              value={this.state.username}
              onChange={this.handleChange}/>
          </div>
          <div className="input-group">
            <label>Email: </label>
            <input 
              type="text" 
              placeholder="email" 
              name="email"
              value={this.state.email}
              onChange={this.handleChange}/>
          </div>
          <div className="input-group">
            <label>Issue: </label>
            <input 
              type="text" 
              placeholder="issue" 
              name="issue"
              value={this.state.issue}
              onChange={this.handleChange}/>
          </div>
          <button type="button" onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
     );
  }
}
 
export default App;