import React from 'react';
import Main from "./components/Main";

const BtnColorContext = React.createContext('btn btn-dark');
export default class App extends React.Component<any, any> {
  constructor(props: any){
    super(props);
    this.state={

    }
  }
  render(){
    return (
      <React.Fragment>
          <Main />
      </React.Fragment>
    );
  }
}


