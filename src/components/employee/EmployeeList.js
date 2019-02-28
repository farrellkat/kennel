import React, { Component } from 'react'

class EmployeeList extends Component {
    render() {
        return (
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
        )
    }
}

export default EmployeeList