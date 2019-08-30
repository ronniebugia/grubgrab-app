import React from 'react'
import Comment from './Comment'

class WeeklyFoodSchedule extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            startingDeliveryDate: null,
            daysPerWeek: 0,
            
        }
    }

    render(){
        return(
            <div className="card">
                <h4>{this.props.startDate} to {this.props.endDate}</h4>
                <div className="card-content">
                    <h5>Delivery Days</h5>
                    <h5>Meal Selection</h5>
                    <h5>Address for Delivery</h5>
                    
                    <h5>Comments</h5>
                    <Comment/>
                </div>
            </div>
            
        )
    }
}


export default WeeklyFoodSchedule