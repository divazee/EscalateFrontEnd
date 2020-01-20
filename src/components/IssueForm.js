import React, {Component} from 'react';
import axios from 'axios';

class IssueForm extends Component {
    state = { 
      // allStaff : []
    }

  handleSubmit = async (e) => {
    // e.preventDefault();
    const {email, name, issue} = this.state;

    // API call
    const data = {email, name, issue};
    console.log(data);
    try {
    let result = await axios({ method : 'POST', url: 'http://localhost:5000', data });
    if(result) {
      alert('form submitted successfully');
    }
    } catch(e) { console.log(e) }
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
            <input 
              type="text" 
              placeholder="name" 
              name="name"
              value={this.state.name}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="email" 
              name="email"
              value={this.state.email}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="issue" 
              name="issue"
              value={this.state.issue}
              onChange={this.handleChange}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
     );
  }
}
 
export default IssueForm;