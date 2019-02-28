import React, { Component } from 'react'

class OwnersList extends Component {
    render() {
        return (
            <section key="OwnersSection">
                {
                    this.props.owners.map(owner =>
                        <div key={`ownerList--${owner.id}`}>
                            {owner.name} / Phone: {owner.phone}
                        </div>
                    )
                }
            </section>
        )
    }
}

export default OwnersList