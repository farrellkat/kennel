import React, { Component } from 'react'

class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="employeeButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/employees/new")}
                            }>
                        New Employee
                    </button>
                </div>
            <section className="employees">
                {
                    this.props.employees.map(employee =>
                        <div key={`employee--${employee.id}`}>
                            {employee.name}
                        <button
                            onClick={()=>
                                this.props.fireEmployee(employee.id)
                            }>
                            Fire!</button>
                            </div>
                    )
                }
            </section>
            </React.Fragment>
        )
    }
}

export default EmployeeList