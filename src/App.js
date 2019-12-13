import React from "react";
import "./App.css";
import axios from 'axios';
import { Jumbotron } from 'reactstrap';
import ImageCard from './components/img-card';
import Navigation from './components/nav';

function formatDate(date) {

  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear();
  if(dd < 10) dd = '0' + dd
  if(mm < 10) mm = '0' + mm
  date = yyyy + '-' + mm + '-' + dd;
  return date

}

function lastSevenDays() {

  var result = [];

  for (var i=0; i<7; i++) {
    var d = new Date();
    d.setDate(d.getDate() - i);
    result.push( formatDate(d) )
  }

  return result;

}

class App extends React.Component {

  constructor(props) { super(props); this.state = { data: [], LOADED: false }; }

  componentDidMount() {

    const results = [];

    lastSevenDays().forEach(date => {
      // 
      axios.get('https://api.nasa.gov/planetary/apod?api_key=IPzaaVH6P2c53nz53zr2nm8tVaPznHQkiCOPXJ5d&date=' + date).then(response => {results.push(response.data); this.setState({data: results, LOADED: true});}).catch((error) => console.log(error)).finally(() => {});

    });

  }

  render() {
    
    const cards = [];

    this.state.data.forEach(result => { if (result.media_type === 'image') cards.push(<ImageCard name={result.title} date={result.date} url={result.url} desc={result.explanation} />)});
     
    if (this.state.LOADED)
      if (this.state.data.length > 0)
        return (
          <div className="App" style={{width: '100%', height: '100%'}}>
            <Navigation />
            <div style={{width: '60%', height: '100%', margin: '20px auto 0px auto', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'}}>
              {cards}
            </div>
          </div>
        );
      else 
        return (<div className="App" style={{width: '100%', height: '100%'}}><Navigation /></div>);
    else
      return (<><Navigation />
        <div>
            <Jumbotron>
                <h1 className="display-3">Loading...</h1>
            </Jumbotron>
        </div></>);

  }

}

export default App;
