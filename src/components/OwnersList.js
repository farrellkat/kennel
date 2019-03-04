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
                <section key="OwnersSection">
                    {
                        this.props.owners.map(owner =>
                            <div key={`ownerList--${owner.id}`}>
                                {owner.name} / Phone: {owner.phone}
                                <button
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