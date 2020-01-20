import React, {Component} from 'react';
import './App.css';
// import axios from 'axios';
import MyTable from './components/MyTable';
import IssueForm from './components/IssueForm';
// import IssueSearchBar from './components/IssueSearchBar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      // allStaff : []
    }
  }

  // theSearch = (term) => {
    
  // }


  render() { 
    return ( 
      <div className="App"> 
        {/* <IssueSearchBar onSearchTermChange={theSearch} />        */}
        <IssueForm />
        <MyTable />
      </div>
     );
  }
}
 
export default App;