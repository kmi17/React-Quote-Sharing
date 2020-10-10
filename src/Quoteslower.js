import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const initialQuoteText = 'Add your quote here ...';

class Quoteslower extends React.Component{
  constructor(props){
    super(props);
    this.state={ quote : initialQuoteText};
    this.state={ kmi : 'CAMY'};
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleClickAway = this.handleClickAway.bind(this)
  }

  handleChange(e) {
    this.setState({quote: e.target.value});
  }

  handleSubmit(event){
    this.props.onClick(this.state.quote);
    alert("Quote : " + this.state.quote);
    alert("Quote : " + this.state.kmi);
    event.preventDefault();
  }

  handleOnClick(event){
    if (this.state.quote === initialQuoteText) {
      this.setState({ quote : ''})
    }
  }

  handleClickAway(event){
    if (this.state.quote === "") {
      setTimeout(function() { //Start the timer
        this.setState({ quote : initialQuoteText})
    }.bind(this), 900)
      
    }
  }

  render(){
    return (
      // {height: '100px'},
      <div>
      <Form style={{margin: '50px 50px 20px 20px'}}>
      <Form.Control style={{margin: '50px 50px 20px 20px'}} value={this.state.quote} onClick={this.handleOnClick} onChange={this.handleChange} onMouseLeave={this.handleClickAway} />
      <Button variant="primary" onClick={this.handleSubmit}>Share Quotes</Button>
      </Form>
      </div>
    );
  }
}

export default Quoteslower;