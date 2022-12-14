import React from 'react';

const RemoveButton = (props) => {
    return (
        <>
            <button onClick={props.handleRemove}>Remove water</button>
        </>
    )
}

export default RemoveButton;