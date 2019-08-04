import React from 'react';
// import {Component} from 'react';
import './UserOutput.css';


/* Class solution */
// class UserOutput extends Component {
//     render(){
//         return (
//             <div>
//                 <h1>Return multiple elements</h1>
//                 <h1 className="UserOutput">{this.props.username}</h1>
//             </div>
//         )
//     }
// }


/* Function solution */
const UserOutput = (props) => {
    return(
        <div>
            <h1>Return multiple elements</h1>
            <h1 className="UserOutput">{props.username}</h1>
        </div>
    )
};


export default UserOutput;