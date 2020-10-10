import React from 'react';
import Card from 'react-bootstrap/Card'

class Quotesupper extends React.Component{
    render(){
        const quotes = this.props.quotes;
        console.log(quotes)
        const moves = quotes.map((eachQ, step)=>{
            return (
              <Card.Body key = {step}>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        {eachQ} {' '}
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </Card.Body>
        
            );
        });

        return(
          <Card>
  {moves}
</Card>
        );
    }
}
  
  export default Quotesupper;