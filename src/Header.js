import * as React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Header extends React.Component{
    render(){
        return (
            <Jumbotron>
            <h1>Quote Sharing Application</h1>
            <p>
              This is a simple quote sharing application. 
            </p>
          </Jumbotron>
  );
};
}

export default Header;