// import React, {Component} from 'react';
import React, {useState} from 'react';
import './App.css';
import UserInput from './user/UserInput';
import UserOutput from './user/UserOutput';

/* Class solution */
// class App extends Component {
//     state = {
//         username: "eavictor"
//     };
//
//     changeUserNameHandler = (event) => {
//         this.setState({username: event.target.value});
//     };
//
//     render(){
//         const style = {
//             align: "center",
//             textAlign: "center",
//             margin: "auto",
//             border: "10px solid #282c6f",
//             width: "50%",
//             minHeight: "300px",
//             marginTop: "20px",
//             backgroundColor: "#282c34",
//             color: "#61dafb"
//         };
//
//
//         return (
//             <div className="App">
//                 <div style={style}>
//                     <h1>User Input</h1>
//                     <UserInput changeUserName={this.changeUserNameHandler} username={this.state.username}/>
//                 </div>
//                 <div style={style}>
//                     <h1>User Output</h1>
//                     <UserOutput username={this.state.username}/>
//                 </div>
//                 <div style={style}>
//                     <h1>User Output</h1>
//                     <UserOutput username={this.state.username}/>
//                 </div>
//             </div>
//         );
//     }
// }

/* Function solution */
const initState = {username: "eavictor"};


function App() {
    const [user, setUserName] = useState(initState);
    const style = {
        align: "center",
        textAlign: "center",
        margin: "auto",
        border: "10px solid #282c6f",
        width: "50%",
        minHeight: "300px",
        marginTop: "20px",
        backgroundColor: "#282c34",
        color: "#61dafb"
    };

    const changeUserNameHandler = (event) => {
        setUserName({username: event.target.value});
    };

    return(
        <div>
            <div style={style}>
                <h1>User Input</h1>
                <UserInput changeUserName={changeUserNameHandler} username={user.username}/>
            </div>
            <div style={style}>
                 <h1>User Output</h1>
                 <UserOutput username={user.username}/>
             </div>
            <div style={style}>
                 <h1>User Output</h1>
                 <UserOutput username={user.username}/>
             </div>
        </div>
    )
}


export default App;
