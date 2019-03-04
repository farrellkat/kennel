import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import EmployeeList from "./employee/EmployeeList"
import LocationList from './LocationList';
import AnimalList from './AnimalList';
import OwnersList from './OwnersList'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from '../modules/EmployeeManager';
import LocationManager from '../modules/LocationManager';
import OwnerManager from '../modules/OwnerManager';
import AnimalDetail from './AnimalDetail';
import AnimalForm from './animal/AnimalForm';
import EmployeeForm from "./employee/EmployeeForm"
import OwnerForm from './owner/OwnerForm';
import Login from './authentication/Login'

export default class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {
        owners: [],
        employees: [],
        locations: [],
        animals: []
    }

    fireEmployee = id => {
        fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
            .then(() => EmployeeManager.getAll())
            .then(employees => this.setState({
                employees: employees
            })
            )
    }

    deleteOwner = id => {
        fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
            .then(() => OwnerManager.getAll())
            .then(owners => this.setState({
                owners: owners
            })
            )
    }

    addAnimal = animal =>
        AnimalManager.addAnimal(animal)
            .then(() => AnimalManager.getAll())
            .then(animals =>
                this.setState({
                    animals: animals
                })
            );
    addEmployee = employee =>
        EmployeeManager.addEmployee(employee)
            .then(() => EmployeeManager.getAll())
            .then(employees =>
                this.setState({
                    employees: employees
                })
            );
    addOwner = owner =>
        OwnerManager.addOwner(owner)
            .then(() => OwnerManager.getAll())
            .then(owners =>
                this.setState({
                    owners: owners
                })
            );

    deleteAnimal = id => {
        AnimalManager.removeAndList(id).then(
            animals => this.setState({
                animals: animals
            })
        )
    }

    componentDidMount() {
        const newState = {}

        AnimalManager.getAll().then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        })
            .then(() => EmployeeManager.getAll().then(allEmployees => {
                this.setState({
                    employees: allEmployees
                })
            }))
            .then(() => LocationManager.getAll().then(allLocations => {
                this.setState({
                    locations: allLocations
                })
            }))
            .then(() => OwnerManager.getAll().then(allOwners => {
                this.setState({
                    owners: allOwners
                })
            }))
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <Route path="/login" component={Login} />
                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                    return <LocationList LocationList={this.state.locations} />
                    } else {
                        return <Redirect to="login" />
                    }
                }} />
                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList deleteEmployee={this.deleteEmployee}
                                             employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                        addEmployee={this.addEmployee}
                        employees={this.state.employees} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                    return <AnimalList {...props}
                        deleteAnimal={this.deleteAnimal}
                        animals={this.state.animals} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    if (this.isAuthenticated()) {
                    return <OwnersList {...props} deleteOwner={this.deleteOwner}
                        owners={this.state.owners} />
                    } else {
                        return <Redirect to="login" />
                    }
                }} />
                <Route exact path="/owners/new" render={(props) => {
                    return <OwnerForm {...props}
                        addOwner={this.addOwner}
                        owners={this.state.owners} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
            </React.Fragment>
        );
    }
}