import React from "react"
export default function StandCookie(props) {
    if (props.loading) console.log(props.loading); 
    return <ul>
        {props.stands.map(stand => (
            <li key={stand.id} className="space-x-2">
                {/* <span>{stand.location}</span> */}
                {/* <span onClick={() => onDelete(stand.id)}>[X]</span> */}
            </li>
        ))}
    </ul>
}

