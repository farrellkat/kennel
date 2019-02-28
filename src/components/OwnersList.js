import React, { Component } from 'react'

class OwnersList extends Component {
    render() {
        return (
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
        )
    }
}

export default OwnersList