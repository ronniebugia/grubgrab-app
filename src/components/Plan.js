import React from 'react'

function Plan(props){
    return (
        <div className="card">
            <h4>Meal Plan: {props.mealPlan}</h4>
            <h4>Days Per Week: {props.daysPerWeek}</h4>
        </div>
    )
}

export default Plan