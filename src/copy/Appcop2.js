import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import MyTable from './components/MyTable';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      allStaff : []
    }
  }
  
  componentDidMount() {
    this.getAllIssues();
  }

  handleSubmit = async (e) => {
    // e.preventDefault();
    const {email, name, issue} = this.state;

    const data = {email, name, issue};
    console.log(data);
    // axios({
    //   method : 'POST',
    //   url: 'http://localhost:3000',
    //   data,
    //   json : true
    // })
    // .then(data => {
    //   console.log(data);
    //   if(data){ alert("form submitted successfully")}
    // })
    // .catch(e => {
    //   console.log(e);
    // });

    try {
    let result = await axios({ method : 'POST', url: 'http://localhost:5000', data });
    if(result) {
      alert('form submitted successfully');
    }
    } catch(e) { console.log(e) }
  }

  getAllIssues = async (e) => {
    try{
      let result = await axios.get('http://127.0.0.1:5000/getusers');
      console.log(result);
      this.setState({
        allStaff : result.data
      });  
    } catch(e) {
      console.log(e)
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  render() { 
    return ( 
      <div className="App">
        <form action="" method="" className="App-header" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Search Term"/>
        </div>
          <div className="form-group">
            {/* <label>Name: </label> */}
            <input 
              type="text" 
              placeholder="name" 
              name="name"
              value={this.state.name}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            {/* <label>Email: </label> */}
            <input 
              type="text" 
              placeholder="email" 
              name="email"
              value={this.state.email}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            {/* <label>Issue: </label> */}
            <input 
              type="text" 
              placeholder="issue" 
              name="issue"
              value={this.state.issue}
              onChange={this.handleChange}/>
          </div>
          <button type="submit">Submit</button>
        </form>
        
        <MyTable data={this.state.allStaff} />
      </div>
     );
  }
}
 
export default App;