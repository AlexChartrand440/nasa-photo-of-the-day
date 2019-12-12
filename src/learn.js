import React from 'react';
import "./learn.css";
import axios from 'axios';
import Navigation from './components/nav';
import { Jumbotron } from 'reactstrap';

class Learn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            DATE: props.match.params.DATE,
            DATA: undefined,
            LOADED: false
         }
    }

    componentDidMount() {

        axios.get('https://api.nasa.gov/planetary/apod?api_key=IPzaaVH6P2c53nz53zr2nm8tVaPznHQkiCOPXJ5d&date=' + this.state.DATE).then(response => { this.setState({ DATA: response.data, LOADED: true }); }).catch((error) => console.log(error)).finally(() => { });

    }

    render() {

        if (this.state.LOADED)
            if (this.state.DATA === undefined)
                return (<><Navigation />
                    <div>
                        <Jumbotron>
                            <h1 className="display-3">No such image found</h1>
                        </Jumbotron>
                    </div></>);
            else
                return (<><Navigation />
                    <div>
                        <Jumbotron>
                            <h1 className="display-3">{this.state.DATA.title}</h1>
                            <p className="lead">{this.state.DATE}</p>
                            <img src={this.state.DATA.url} alt='NASA APOD'/>
                            <hr className="my-2" />
                            <p>{this.state.DATA.explanation}</p>
                        </Jumbotron>
                    </div></>);
        else
            return (<><Navigation />
                <div>
                    <Jumbotron>
                        <h1 className="display-3">Loading...</h1>
                    </Jumbotron>
                </div></>);
    }
};

export default Learn;