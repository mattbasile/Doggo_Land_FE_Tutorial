import React from 'react'
// Import withRouter to give us access to the match property
import {withRouter} from 'react-router-dom';

function DogPage(props) {
    return (
        <div>
            {`Dog ${props.match.params.id}`}
        </div>
    )
}


export default withRouter(DogPage)