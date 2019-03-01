import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import EmployeeList from "./employee/EmployeeList"
import LocationList from './LocationList';
import AnimalList from './AnimalList';
import OwnersList from './OwnersList'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from '../modules/EmployeeManager';
import LocationManager from '../modules/LocationManager';
import OwnerManager from '../modules/OwnerManager';

export default class ApplicationViews extends Component {


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
                <Route exact path="/" render={(props) => {
                    return <LocationList LocationList={this.state.locations} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList fireEmployee={this.fireEmployee}
                        employees={this.state.employees} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnersList deleteOwner={this.deleteOwner}
                        owners={this.state.owners} />
                }} />
            </React.Fragment>
        );
    }
}