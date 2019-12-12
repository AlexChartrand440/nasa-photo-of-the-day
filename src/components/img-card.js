import React from "react";

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            name: props.name,
            date: props.date,
            url: props.url,
            desc: props.desc

        };
    }

    render() {

        return (<>
            <div>
                <div>
                    <h1>{this.state.name}</h1>
                    <h2>{this.state.date}</h2>
                </div>
                <img src={this.state.url} alt='NASA' />
            </div>
        </>);

    } 

};

export default ImageCard;