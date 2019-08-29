import React from 'react'
import {withRouter} from 'react-router-dom'

function Card(props) {
    return (
        <div>
            {props.item.name}
            {props.dogMode?
                <button onClick={()=>{props.history.push(`/dog/${props.item.id}`)}}>Learn More</button>
            : <button onClick={()=>{props.history.push(`/kennel/${props.item.id}`)}}>Learn More</button>
            }
        </div>
    )
}
export default withRouter(Card)
