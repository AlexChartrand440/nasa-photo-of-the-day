import React from "react";
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            name: props.name,
            date: props.date,
            url: props.url,
            desc: props.desc,
            redirect: false

        };
    }

    redirect() { window.location = '/learn/' + this.state.date; }

    render() {

        return (<>
            <div>
                <Card style={{maxWidth: '250px'}}>
                    <CardBody>
                        <CardTitle>{this.state.name}</CardTitle>
                        <CardSubtitle>{this.state.date}</CardSubtitle>
                        <Button onClick={() => this.redirect()}>Learn more</Button>
                    </CardBody>
                    <CardImg top width="100%" src={this.state.url} style={{borderRadius: '0px 0px 5px 5px'}} alt="NASA APOD" />
                </Card>
            </div>
        </>);

    } 

};

export default ImageCard;