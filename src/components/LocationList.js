import React, { Component } from 'react'

class LocationList extends Component {
    render() {
        return (
            <section>
                {
                    this.props.LocationList.map(location =>
                        <div key={`location--${location.id}`}>
                            <div>{location.name} - {location.address}</div>
                        </div>)
                }
            </section>
        )
    }
}

export default LocationList