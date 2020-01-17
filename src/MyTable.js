import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

    class MyTable extends Component {
        // constructor(props) {
        //     super(props);
        //     this.state = {}
        // //     this.state = {
        // //       allStaff: [
        // //          { id: 1, username: 'Wasif', email: 'wasif@email.com', issue: 'no AC' },
        // //          { id: 2, username: 'Ali', email: 'ali@email.com', issue: 'no AC' },
        // //          { id: 3, username: 'Saad', email: 'saad@email.com', issue: 'no AC' },
        // //          { id: 4, username: 'Asad', email: 'asad@email.com', issue: 'no AC' }
        // //       ]
        // //    }
        // }

        componentDidMount(){
            console.log(this.props.data);
        }

        // renderTableHeader() {
        //     let header = Object.keys(this.props.data[0])
        //     return header.map((key, i) => {
        //        return <th key={i}>{key.toUpperCase()}</th>
        //     })
        // }

        renderTableData() {
            return this.props.data.map((staff, index) => {
               const { id, username, email, issue } = staff //destructuring
               return (
                  <tr key={id}>
                     <td>{id}</td>
                     <td>{username}</td>
                     <td>{email}</td>
                     <td>{issue}</td>
                  </tr>
               )
            })
        }
        
        render() { 
            return ( 
                <div className="mx-5">
                    <Table striped bordered hover size="sm" variant="dark">
                    <thead>
                     {/* <tr>{this.renderTableHeader()}</tr> */}
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Issue</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderTableData()}
                    </tbody>
                    </Table>
                </div>
     );
    }
}

export default MyTable;