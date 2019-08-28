import React from 'react'
// Import withRouter to give us access to the match property
import {withRouter} from 'react-router-dom';



function KennelPage(props) {
    return (
        <div>
            {`Kennel ${props.match.params.id}`}
        </div>
    )
}


export default withRouter(KennelPage)