import React from "react";
import "./App.css";
import axios from 'axios';
import ImageCard from './components/img-card';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: undefined };
  }

  componentDidMount() {

    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(response => this.setState({data: response.data})).catch((error) => console.log(error)).finally(() => {})

  }

  render() {
    console.log(this.state.data);
    if (this.state.data != undefined) {
      return (
        <div className="App">
          <ImageCard name={this.state.data.title} date={this.state.data.date} url={this.state.data.url} desc={this.state.data.explanation} /> 
        </div>
      );
    }
    return (<div className="App"></div>);
  }
}

export default App;
