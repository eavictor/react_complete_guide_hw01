import React from 'react';
// import {Component} from 'react';


/* Class solution */
// class UserInput extends Component {
//     render(){
//         return (
//             <input type="text" onChange={this.props.changeUserName} value={this.props.username}/>
//         )
//     }
// }


/* Function solution */
const UserInput = (props) => {
    return(
        <input type="text" onChange={props.changeUserName} value={props.username}/>
    )
};


export default UserInput;