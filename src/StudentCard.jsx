// Vite's React setup lets this file use JSX without importing React.

function StudentCard(props) { // Defines a reusable card that receives values from App.
    console.log(props) // Shows the values passed from App in the browser console.

    return ( // Returns the card content that React should display.
        <div>
            {/* This inner div groups the card content and adds a simple border and space. */}
            <div style={{border:"1px solid black", padding:"2px"}}>
                {/* Read the name value from the props object. */}
                <h1>Name {props.name}</h1>
                {/* Read the email value from the props object. */}
                <h3>Email {props.email}</h3>
                {/* Show name2 when the parent passes that prop. */}
                <h4>Name2 {props.name2}</h4>
                {/* Show the email line only when email2 has a value. */}
                {props.email2 && <h5>Email2 {props.email2}</h5>}
            </div>
        </div>
    )
}

export default StudentCard // Lets App.jsx use this component.

// Remember:
// StudentCard is a reusable component that receives its values through props.
// JSX describes the card's content, and {props.name} inserts a JavaScript value.
