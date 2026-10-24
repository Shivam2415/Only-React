import React from 'react'

function StudentCard(props) {
    console.log(props)
    return (
        <div>
            <div style={{border:"1px solid black", padding:"2px"}}>
                <h1>Name {props.name}</h1>
                <h3>Email {props.email}</h3>
            </div>
        </div>
    )
}

export default StudentCard
