import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quotesupper from './Quotesupper';
import Quoteslower from './Quoteslower';
import Header  from './Header';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
        quotes : [],
    }
  }

  onClick(quote) {
    const quotes = this.state.quotes;
    this.setState({
      quotes : quotes.concat(quote),
      });
  }
  render(){
    return(
      <div className="App">
      <Header/>
     <Quoteslower onClick={this.onClick.bind(this)}/>
     <Quotesupper quotes={this.state.quotes}/>
    </div>
    );
  }
} 

export default App;
