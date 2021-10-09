import React from 'react';
import './Business.css'

class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.businessInfo.imageSrc} alt='' />
                </div>
                <h2>{this.props.businessInfo.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{this.props.businessInfo.address}</p>
                        <p>{this.props.businessInfo.city}</p>
                        <p>{this.props.businessInfo.state} {this.props.businessInfo.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.businessInfo.category}</h3>
                        <h3 className="rating">{this.props.businessInfo.rating}</h3>
                        <p>{this.props.businessInfo.reviewCount}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Business;