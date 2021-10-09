import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
               {this.props.businessArray.map(businessParam => {
                   return <Business businessInfo={businessParam} key={businessParam.id}/>
               })}
            </div>
        )
    }
}

export default BusinessList;