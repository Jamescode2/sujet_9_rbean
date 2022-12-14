import React from 'react'
import ReactDOM from "react-dom"

/* Write here the Client component as a class component */
class Client extends React.Component {
    render() {
        return(
            <li> {this.props.gender === "male" ? 'Mr' : 'Mme'} {this.props.firstname} {this.props.lastname}</li>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <>
                <Client gender="male" firstname="Tony" lastname="Stark" />
                <Client gender="female" firstname="Natasha" lastname="Romanoff" />
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))