import React from 'react';
import Card from 'react-bootstrap/Card'

class Quotesupper extends React.Component {
  render() {
    const quotes = this.props.quotes;
    const text = this.props.kmi;
    const moves = quotes.map((quote, step) => {
      return (
        <Card.Body key={step}>
          <blockquote className="blockquote mb-0">
            <p>
              {quote} 
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">{text}</cite>
            </footer>
          </blockquote>
        </Card.Body>

      );
    });

    return (
      <Card>
        {moves}
      </Card>
    );
  }
}

export default Quotesupper;