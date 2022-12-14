import React from 'react'
import ReactDOM from "react-dom"

class Client extends React.Component {
    render() {
        return (
            <li>
                {this.props.gender === "male" ? 'Mr' : 'Mme'} {this.props.firstname} {this.props.lastname}
            </li>
        )
    }
}

class App extends React.Component {
    render() {
        let tab=[];
        for (let i = 0; i < people.length; i++) {
            tab.push(<Client gender={people[i]['gender']} firstname={people[i]['firstname']} lastname={people[i]['lastname']} />)
        }
        return(
            <>
            {tab}
            </>
        );
    }
};

const people = [
    { gender: "male", firstname: "Tony", lastname: "Stark" },
    { gender: "female", firstname: "Natasha", lastname: "Romanoff" },
    { gender: "male", firstname: "Loki", lastname: "of Mischief" },
]

ReactDOM.render(<App people={people} />, document.getElementById('root'))