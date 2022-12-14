import React from 'react';

const AddButton = (props) => {
    return (
        <>
            <button onClick={props.handleAdd}>Add water</button>
        </>
    )
}

export default AddButton;