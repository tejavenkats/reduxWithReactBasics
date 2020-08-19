import React from "react";
import { connect } from 'react-redux';

function Counter (props){

    function increment(){
        props.dispatch({
            type:"increment"
        });
    }

    function decrement(){
        props.dispatch({
            type:"decrement"
        })
    }

    return(
        <div>
            <h2>Counter</h2>
            <button onClick={decrement}>-</button>
            <span style={{fontSize:"30px",padding:"2rem"}}>{props.count}</span>
            <button onClick = {increment}>+</button>
        </div>
    )

    
}

function mapStateToProps(state){
    return {
        count: state.count
    }
}
export default connect(mapStateToProps)(Counter);