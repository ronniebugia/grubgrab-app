import React from 'react';
import './css/base.css';
import './css/style.css';
import WeeklyFoodSchedule from './components/WeeklyFoodSchedule'
import Navbar from './components/Navbar'
import Plan from './components/Plan'

class App extends React.Component {

    createWeeklyFoodSchedules(startDates, endDates) {
      let schedules = []

      // Outer loop to create parent
      for (let i = 0; i < startDates.length; i++) {
        schedules.push(
          <WeeklyFoodSchedule
            key={i}
            startDate={startDates[i].toDateString()}
            endDate={endDates[i].toDateString()}
          />
        )
      }
      
      return schedules
    }


    render() {

      let startingDate = new Date("2019-08-12")
      let deliveryStartDates = generateDeliveryDates(startingDate)[0]
      let deliveryEndDates = generateDeliveryDates(startingDate)[1]

      console.log(deliveryStartDates)
      console.log(deliveryEndDates)

      console.log(deliveryStartDates[deliveryStartDates.length-1])
      console.log(nextWeek(deliveryStartDates[deliveryStartDates.length-1]))

      return (
        <div className="row">
          <Navbar/>
          <Plan mealPlan="Double" daysPerWeek="1" />
          {this.createWeeklyFoodSchedules(deliveryStartDates, deliveryEndDates)}
        </div>

      );
    } 
}


//Generate delivery weeks from the start date
function generateDeliveryDates(startingDate){
  
  let deliveryStartDates = []
  let deliveryEndDates = []

  for (let i=0; i < 5; i++){
    if (deliveryStartDates.length === 0){
      deliveryStartDates.push(startingDate);
      deliveryEndDates.push(addSixDays(startingDate))
    }else{
      let next = nextWeek(deliveryStartDates[deliveryStartDates.length - 1])
      deliveryStartDates.push(next)
      deliveryEndDates.push(addSixDays(next))
    }
  }
  return [deliveryStartDates, deliveryEndDates]
}

//Get Next Week
function nextWeek(date){
  let newDate = new Date()
  return new Date(newDate.setDate(date.getDate() + 7))
}

//Add 6 days to date
function addSixDays(date){
  let newDate = new Date()
  return new Date(newDate.setDate(date.getDate() + 6))
}


/*
//Get the next day of week from the day
// Sun:0, Mon:1, Tues:2, ... , Sat:6
function nextDayOfWeek(date, dayOfWeek){
  let newDate = new Date()
  newDate.setDate(date.getDate() + (dayOfWeek + (7 - date.getDay())) % 7);
  return newDate;
}
*/

export default App
