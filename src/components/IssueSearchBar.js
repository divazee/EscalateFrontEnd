import React, { Component } from 'react';

class IssueSearchBar extends Component {
    constructor() {
        super()
        this.state = {
            term: ''
        }
    }

    render() {
        return (
            <div className="App"> 
                <input
                    className="form-control text-center"
                    placeholder="Search Term"
                    name='term'
                    value={this.state.term}
                    // onChange={e => this.setState({ term: e.target.value })}
                    onChange={e => this.onInputChange(e.target.value)}
                />
            </div>
        );
    }

    onInputChange(term){
        this.setState({ term })
        this.props.onSearchTermChange(term)
    }
}

export default IssueSearchBar;