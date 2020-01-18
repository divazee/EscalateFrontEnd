import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

    class MyTable extends Component {
        state = {}

        renderTableData() {
            return this.props.data.map((staff, i) => {
               const { name, email, issue } = staff //destructuring
               return (
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{issue}</td>
                </tr>
            )
        })
    }
        
    render() {
        return ( 
            <div className="">
                <Table striped bordered hover size="sm" variant="dark">
                    <thead>
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