import React from 'react'

class Comment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: "Insert Text Here"
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div>
              <textarea value={this.state.value} onChange={this.handleChange} />
            </div>
            <input className="btn-default" type="submit" value="Submit" />
        </form>
      );
    }
}

export default Comment