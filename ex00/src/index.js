import React from 'react'
import ReactDOM from "react-dom"

function Today({date}) {
    return <p>Today is {date}</p>;
}

/* Insert here your class definition for the App class component */
class App extends React.Component {
    render() {
        return (
            <Today date={Date()} />
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'))