import React from 'react'

class Navbar extends React.Component{

    render(){
        return(
            <img src={require('../images/grubgrab-logo.jpg')}  alt="Grubgrab" className="logo"></img>
        )
    }
}

export default Navbar