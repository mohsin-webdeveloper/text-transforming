import React from 'react'

function Alerts(props) {
    return (
        <div style={{height:"80px"}}>
       { props.alert &&  <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong> {props.alert.msg}.
           
            </div>
        </div>}
        </div>
    )
}

export default Alerts
