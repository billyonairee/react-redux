import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
        onClick: (size)=>{
            dispatch({ type: "INCREAMENT", size: size})
        }
    }
}

export default connect(null, mapDispatchToProps)(AddNumber);

// import React, { Component } from 'react';
// import store from '../store';

// export default class extends Component {
//     onClick = (size) => {
//         store.dispatch({ type: "INCREAMENT", size: size });
//     }
//     render(){
//         return <AddNumber onClick={this.onClick}/>
//     }
// }
