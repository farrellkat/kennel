import React, { Component } from 'react'

class OwnersList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="ownerButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/owners/new")
                        }
                        }>
                        New Owner
                    </button>
                </div>
                <section key="OwnersSection" className="owners">
                    {
                        this.props.owners.map(owner =>
                            <div key={`ownerList--${owner.id}`} className="card">
                                <h5>{owner.name}</h5>
                                <p>Phone: {owner.phone}</p>
                                <button className="btn btn-danger"
                                    onClick={() =>
                                        this.props.deleteOwner(owner.id)}>
                                    Delete
                            </button>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default OwnersList