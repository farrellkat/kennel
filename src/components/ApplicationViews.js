import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import EmployeeList from "./employee/EmployeeList"
import LocationList from './LocationList';
import AnimalList from './Animals';
import OwnersList from './OwnersList'

class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Fluffy", type: "Cat", ownerId: 2 },
        { id: 2, name: "Bingo", type: "Dog", ownerId: 6 },
        { id: 3, name: "Arthur", type: "Aardvark", ownerId: 1 },
        { id: 4, name: "Peter", type: "Rabbit", ownerId: 3 }
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay", phone: "555-5555" },
        { id: 2, name: "Emma Beaton", phone: "555-1234" },
        { id: 3, name: "Dani Adkins", phone: "555-4321" },
        { id: 4, name: "Adam Oswalt", phone: "555-6789" },
        { id: 5, name: "Fletcher Bangs", phone: "555-9876" },
        { id: 6, name: "Angela Lee", phone: "555-9124" }
    ]

    state = {
        owners: this.ownersFromAPI,
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList LocationList={this.state.locations} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnersList owners={this.state.owners} />
                }} />
            </React.Fragment>
        );
    }
}

export default ApplicationViews